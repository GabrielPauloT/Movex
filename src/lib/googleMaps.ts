import { unstable_cache } from 'next/cache';

export interface Review {
    author_name: string;
    rating: number;
    relative_time_description: string;
    text: string;
    language?: string;
}

export interface GooglePlaceDetails {
    rating: number;
    user_ratings_total: number;
    reviews: Review[];
}

const PLACE_ID = 'ChIJ02W78lQmzYERrzxAKhWxdZg'; // MoverX Solutions Place ID
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

// Fallback data scraped manually
const FALLBACK_DATA: GooglePlaceDetails = {
    rating: 4.9,
    user_ratings_total: 17,
    reviews: [
        {
            author_name: "rob serr",
            rating: 5,
            relative_time_description: "1 week ago",
            text: "Obrigada, Mover X Solutions. Não poderia estar mais satisfeita com o serviço. Do início ao fim, eles foram profissionais, pontuais e incrivelmente cuidadosos com todos os nossos pertences. A equipe chegou na hora marcada, trabalhou com eficiência e lidou com tudo com genuíno cuidado e respeito. Os preços foram muito competitivos, sem surpresas, o que tornou todo o processo muito tranquilo. Recomendo muito."
        },
        {
            author_name: "Sandra Butorac",
            rating: 5,
            relative_time_description: "3 months ago",
            text: "Recentemente, contratei uma equipe de mudanças brasileira para minha mudança e não poderia estar mais feliz com a experiência! Eles foram incrivelmente profissionais, mas descontraídos, tornando todo o processo agradável. A paciência deles ao colocar os móveis no meu novo apartamento foi impressionante; eles se dedicaram a garantir que tudo estivesse exatamente onde eu queria. Além disso, o estilo impecável deles deu um toque divertido ao dia. Recomendo muito os serviços deles para quem busca uma experiência tranquila e agradável! 🇧🇷🇧🇷🇧🇷"
        },
        {
            author_name: "Taylah Carter",
            rating: 5,
            relative_time_description: "3 months ago",
            text: "Não poderia recomendá-los o suficiente. Eles tiveram tanto cuidado com cada item. Um destaque especial foi a flexibilidade e a compreensão quando precisei remarcar. No dia da minha mudança, eles chegaram no horário marcado e prestaram muita atenção, garantindo que seguissem as regras do prédio e do condomínio. Incrivelmente profissionais e amigáveis. Eles foram eficientes, mas garantiram que meus itens estivessem seguros e protegidos. Posso confirmar que tudo chegou ao meu novo endereço sem nenhuma falha."
        },
        {
            author_name: "kk 39",
            rating: 5,
            relative_time_description: "1 week ago",
            text: "Funcionários super simpáticos e rececionistas muito prestativos. Liguei para eles um dia antes da mudança e resolveram tudo de forma rápida e fácil. Muito eficientes e experientes, recomendo!"
        },
        {
            author_name: "Li Galli",
            rating: 5,
            relative_time_description: "4 days ago",
            text: "Gostaria de agradecer o excelente trabalho realizado por Victor e Guilherme hoje. Tudo foi conduzido com muita atenção e eficiência."
        }
    ]
};

export async function getGooglePlaceDetails(): Promise<GooglePlaceDetails> {
    if (!GOOGLE_PLACES_API_KEY) {
        console.warn('GOOGLE_PLACES_API_KEY is not set. Using fallback data.');
        return FALLBACK_DATA;
    }

    return await unstable_cache(
        async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${GOOGLE_PLACES_API_KEY}&language=pt-BR`,
                    { next: { revalidate: 3600 * 24 } } // Cache for 24 hours
                );

                if (!response.ok) {
                    throw new Error(`Google Places API error: ${response.statusText}`);
                }

                const data = await response.json();

                if (data.status !== 'OK') {
                    throw new Error(`Google Places API error status: ${data.status}`);
                }

                return data.result as GooglePlaceDetails;
            } catch (error) {
                console.warn('Failed to fetch Google Place details (using fallback data). Error:', error instanceof Error ? error.message : error);
                return FALLBACK_DATA;
            }
        },
        ['google-place-details'],
        { revalidate: 3600 * 24 }
    )();
}
