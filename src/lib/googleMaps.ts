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

// Fallback data (Portuguese)
const FALLBACK_DATA_PT: GooglePlaceDetails = {
    rating: 4.9,
    user_ratings_total: 17,
    reviews: [
        {
            author_name: "rob serr",
            rating: 5,
            relative_time_description: "1 semana atrás",
            text: "Obrigada, Mover X Solutions. Não poderia estar mais satisfeita com o serviço. Do início ao fim, eles foram profissionais, pontuais e incrivelmente cuidadosos com todos os nossos pertences. A equipe chegou na hora marcada, trabalhou com eficiência e lidou com tudo com genuíno cuidado e respeito. Os preços foram muito competitivos, sem surpresas, o que tornou todo o processo muito tranquilo. Recomendo muito."
        },
        {
            author_name: "Sandra Butorac",
            rating: 5,
            relative_time_description: "3 meses atrás",
            text: "Recentemente, contratei uma equipe de mudanças brasileira para minha mudança e não poderia estar mais feliz com a experiência! Eles foram incrivelmente profissionais, mas descontraídos, tornando todo o processo agradável. A paciência deles ao colocar os móveis no meu novo apartamento foi impressionante; eles se dedicaram a garantir que tudo estivesse exatamente onde eu queria. Além disso, o estilo impecável deles deu um toque divertido ao dia. Recomendo muito os serviços deles para quem busca uma experiência tranquila e agradável! 🇧🇷🇧🇷🇧🇷"
        },
        {
            author_name: "Taylah Carter",
            rating: 5,
            relative_time_description: "3 meses atrás",
            text: "Não poderia recomendá-los o suficiente. Eles tiveram tanto cuidado com cada item. Um destaque especial foi a flexibilidade e a compreensão quando precisei remarcar. No dia da minha mudança, eles chegaram no horário marcado e prestaram muita atenção, garantindo que seguissem as regras do prédio e do condomínio. Incrivelmente profissionais e amigáveis. Eles foram eficientes, mas garantiram que meus itens estivessem seguros e protegidos. Posso confirmar que tudo chegou ao meu novo endereço sem nenhuma falha."
        },
        {
            author_name: "kk 39",
            rating: 5,
            relative_time_description: "1 semana atrás",
            text: "Funcionários super simpáticos e rececionistas muito prestativos. Liguei para eles um dia antes da mudança e resolveram tudo de forma rápida e fácil. Muito eficientes e experientes, recomendo!"
        },
        {
            author_name: "Li Galli",
            rating: 5,
            relative_time_description: "4 dias atrás",
            text: "Gostaria de agradecer o excelente trabalho realizado por Victor e Guilherme hoje. Tudo foi conduzido com muita atenção e eficiência."
        }
    ]
};

// Fallback data (English)
const FALLBACK_DATA_EN: GooglePlaceDetails = {
    rating: 4.9,
    user_ratings_total: 17,
    reviews: [
        {
            author_name: "rob serr",
            rating: 5,
            relative_time_description: "1 week ago",
            text: "Thank you, Mover X Solutions. I couldn't be happier with the service. From start to finish, they were professional, punctual, and incredibly careful with all our belongings. The team arrived on time, worked efficiently, and handled everything with genuine care and respect. The prices were very competitive, with no surprises, making the whole process very smooth. Highly recommend."
        },
        {
            author_name: "Sandra Butorac",
            rating: 5,
            relative_time_description: "3 months ago",
            text: "Recently hired a Brazilian moving team for my move and couldn't be happier with the experience! They were incredibly professional yet laid back, making the whole process enjoyable. Their patience in placing furniture in my new apartment was impressive; they were dedicated to making sure everything was exactly where I wanted it. Plus, their impeccable style added a fun touch to the day. Highly recommend their services for anyone looking for a smooth and pleasant experience! 🇧🇷🇧🇷🇧🇷"
        },
        {
            author_name: "Taylah Carter",
            rating: 5,
            relative_time_description: "3 months ago",
            text: "Couldn't recommend them enough. They took such care with every item. A special highlight was their flexibility and understanding when I needed to reschedule. On the day of my move, they arrived on time and paid close attention, ensuring they followed the building and strata rules. Incredibly professional and friendly. They were efficient but ensured my items were safe and secure. I can confirm everything arrived at my new address without a single scratch."
        },
        {
            author_name: "kk 39",
            rating: 5,
            relative_time_description: "1 week ago",
            text: "Super friendly staff and very helpful receptionists. Called them the day before the move and they sorted everything out quickly and easily. Very efficient and experienced, recommend!"
        },
        {
            author_name: "Li Galli",
            rating: 5,
            relative_time_description: "4 days ago",
            text: "I would like to thank Victor and Guilherme for the excellent work done today. Everything was conducted with great attention and efficiency."
        }
    ]
};

export async function getGooglePlaceDetails(locale: string = 'pt'): Promise<GooglePlaceDetails> {
    const languageCode = locale === 'pt' ? 'pt-BR' : 'en';
    const fallbackData = locale === 'pt' ? FALLBACK_DATA_PT : FALLBACK_DATA_EN;

    if (!GOOGLE_PLACES_API_KEY) {
        console.warn('GOOGLE_PLACES_API_KEY is not set. Using fallback data.');
        return fallbackData;
    }

    return await unstable_cache(
        async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${GOOGLE_PLACES_API_KEY}&language=${languageCode}`,
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
                return fallbackData;
            }
        },
        ['google-place-details', locale], // Include locale in cache key
        { revalidate: 3600 * 24 }
    )();
}
