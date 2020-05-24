export default {
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'Hi',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1'
            },
            {
                title: 'Second ad',
                description: 'Hi',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '2'
            },
            {
                title: 'Third ad',
                description: 'Hi',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '3'
            }
        ]
    },
    mutations: {
        crateAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        crateAd ({commit}, payload) {
            payload.id = '555';
            commit('crateAd', payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}