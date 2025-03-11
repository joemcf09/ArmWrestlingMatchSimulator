const wrestlers = [
    {
        name: "Levan Saginashvili",
        image: "img/levan_saginashvili.jpg",
        weightClass: ["Super Heavyweight"],
        styles: { hook: 0.5, toproll: 0.45, press: 0.05 },
        attributes: {
            right: { strength: 100, hand: 100, wrist: 99, arm: 100, endurance: 97 },
            left: { strength: 97, hand: 97, wrist: 96, arm: 97, endurance: 90 }
        },
        fatigue: 100,
        fatigueRecovery: 1.2
    },
    {
        name: "Devon Larratt",
        image: "img/devon_larratt.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.35, toproll: 0.35, kings: 0.3 },
        attributes: {
            right: { strength: 97, hand: 95, wrist: 96, arm: 96, endurance: 99 },
            left: { strength: 94, hand: 94, wrist: 92, arm: 93, endurance: 97 }
        },
        fatigue: 100,
        fatigueRecovery: 1.1
    },
    {
        name: "Vitaly Laletin",
        image: "img/vitaly_laletin.jpg",
        weightClass: "Super Heavyweight",
        styles: { toproll: 0.8, press: 0.15, hook: 0.05 },
        attributes: {
            right: { strength: 98, hand: 99, wrist: 94, arm: 96, endurance: 92 },
            left: { strength: 92, hand: 95, wrist: 90, arm: 91, endurance: 88 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Ermes Gasparini",
        image: "img/ermes_gasparini.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { press: 0.35, hook: 0.35, toproll: 0.3 },
        attributes: {
            right: { strength: 96, hand: 96, wrist: 95, arm: 94, endurance: 93 },
            left: { strength: 90, hand: 90, wrist: 88, arm: 88, endurance: 87 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Michael Todd",
        image: "img/michael_todd.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { kings: 0.9, press: 0.06, hook: 0.04 },
        attributes: {
            right: { strength: 92, hand: 92, wrist: 90, arm: 95, endurance: 94 },
            left: { strength: 87, hand: 85, wrist: 83, arm: 88, endurance: 90 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Jerry Cadorette",
        image: "img/jerry_cadorette.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { press: 0.9, hook: 0.1 },
        attributes: {
            right: { strength: 92, hand: 90, wrist: 88, arm: 96, endurance: 94 },
            left: { strength: 85, hand: 82, wrist: 80, arm: 88, endurance: 87 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "John Brzenk",
        image: "img/john_brzenk.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { hook: 0.45, press: 0.35, toproll: 0.2 },
        attributes: {
            right: { strength: 92, hand: 95, wrist: 94, arm: 89, endurance: 87 },
            left: { strength: 88, hand: 89, wrist: 87, arm: 87, endurance: 85 }
        },
        fatigue: 90,
        fatigueRecovery: 0.9
    },
    {
        name: "Dave Chaffee",
        image: "img/dave_chaffee.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.6, press: 0.3, toproll: 0.1 },
        attributes: {
            right: { strength: 96, hand: 93, wrist: 91, arm: 93, endurance: 88 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 87, endurance: 83 }
        },
        fatigue: 90,
        fatigueRecovery: 0.9
    },
    {
        name: "Alex Kurdecha",
        image: "img/alex_kurdecha.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.4, toproll: 0.4, press: 0.2 },
        attributes: {
            right: { strength: 95, hand: 95, wrist: 93, arm: 94, endurance: 90 },
            left: { strength: 90, hand: 90, wrist: 88, arm: 89, endurance: 85 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Alizhan Muratov",
        image: "img/alizhan_muratov.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { hook: 0.9, toproll: 0.05, press: 0.05 },
        attributes: {
            right: { strength: 99, hand: 99, wrist: 98, arm: 99, endurance: 96 },
            left: { strength: 95, hand: 95, wrist: 94, arm: 95, endurance: 92 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Artem Taynov",
        image: "img/artem_taynov.jpg",
        weightClass: "Middleweight",
        styles: { hook: 0.5, press: 0.4, toproll: 0.1 },
        attributes: {
            right: { strength: 94, hand: 94, wrist: 92, arm: 93, endurance: 90 },
            left: { strength: 88, hand: 88, wrist: 86, arm: 87, endurance: 85 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Artyom Morozov",
        image: "img/artyom_morozov.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.4, press: 0.4, toproll: 0.2 },
        attributes: {
            right: { strength: 96, hand: 93, wrist: 91, arm: 92, endurance: 88 },
            left: { strength: 87, hand: 87, wrist: 85, arm: 86, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "David Dadikyan",
        image: "img/david_dadikyan.jpg",
        weightClass: ["Heavyweight"],
        styles: { hook: 0.5, press: 0.4, toproll: 0.1 },
        attributes: {
            right: { strength: 95, hand: 94, wrist: 92, arm: 93, endurance: 85 },
            left: { strength: 96, hand: 95, wrist: 93, arm: 96, endurance: 92 }
        },
        fatigue: 100,
        fatigueRecovery: 0.9
    },
    {
        name: "Denis Cyplenkov",
        image: "img/denis_cyplenkov.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { press: 0.4, hook: 0.3, toproll: 0.3 },
        attributes: {
            right: { strength: 96, hand: 95, wrist: 93, arm: 97, endurance: 85 },
            left: { strength: 90, hand: 90, wrist: 88, arm: 92, endurance: 80 }
        },
        fatigue: 90,
        fatigueRecovery: 0.9
    },
    {
        name: "Dmitry Silaev",
        image: "img/dmitry_silaev.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.3, press: 0.3, toproll: 0.4 },
        attributes: {
            right: { strength: 93, hand: 94, wrist: 92, arm: 92, endurance: 89 },
            left: { strength: 87, hand: 88, wrist: 86, arm: 86, endurance: 84 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Evgeny Prudnik",
        image: "img/evgeny_prudnik.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { hook: 0.4, toproll: 0.3, kings: 0.3 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 91, arm: 91, endurance: 91 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 85, endurance: 86 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Ferit Osmali",
        image: "img/ferit_osmali.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { press: 0.7, hook: 0.2, toproll: 0.1 },
        attributes: {
            right: { strength: 93, hand: 90, wrist: 88, arm: 95, endurance: 88 },
            left: { strength: 87, hand: 85, wrist: 82, arm: 89, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Genadi Kvikvinia",
        image: "img/genadi_kvikvinia.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.35, press: 0.35, toproll: 0.3 },
        attributes: {
            right: { strength: 91, hand: 92, wrist: 90, arm: 91, endurance: 87 },
            left: { strength: 85, hand: 86, wrist: 84, arm: 85, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Georgy Dzeranov",
        image: "img/georgy_dzeranov.jpg",
        weightClass: ["Heavyweight"],
        styles: { hook: 0.5, press: 0.3, toproll: 0.2 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 91, arm: 92, endurance: 86 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 86, endurance: 81 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Georgi Tsetkov",
        image: "img/georgi_tsetkov.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.4, press: 0.3, toproll: 0.3 },
        attributes: {
            right: { strength: 91, hand: 92, wrist: 90, arm: 91, endurance: 87 },
            left: { strength: 85, hand: 86, wrist: 84, arm: 85, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Irakli Zirakashvili",
        image: "img/irakli_zirakashvili.jpg",
        weightClass: ["Lightweight", "Middleweight", "Heavyweight"],
        styles: { toproll: 0.9, press: 0.1 },
        attributes: {
            right: { strength: 93, hand: 94, wrist: 92, arm: 92, endurance: 88 },
            left: { strength: 87, hand: 88, wrist: 86, arm: 86, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Ivan Matyushenko",
        image: "img/ivan_matyushenko.jpg",
        weightClass: ["Heavyweight"],
        styles: { hook: 0.35, press: 0.35, toproll: 0.3 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 91, arm: 92, endurance: 89 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 86, endurance: 84 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Kamil Jablonski",
        image: "img/kamil_jablonski.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { press: 0.6, hook: 0.3, toproll: 0.1 },
        attributes: {
            right: { strength: 92, hand: 91, wrist: 89, arm: 94, endurance: 87 },
            left: { strength: 86, hand: 85, wrist: 83, arm: 88, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Khazimurat Zoloev",
        image: "img/khazimurat_zoloev.jpg",
        weightClass: ["Lightweight", "Middleweight"],
        styles: { hook: 0.7, press: 0.2, toproll: 0.1 },
        attributes: {
            right: { strength: 93, hand: 94, wrist: 92, arm: 92, endurance: 88 },
            left: { strength: 87, hand: 88, wrist: 86, arm: 86, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Kody Merritt",
        image: "img/kody_merritt.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.4, press: 0.3, toproll: 0.3 },
        attributes: {
            right: { strength: 91, hand: 92, wrist: 90, arm: 91, endurance: 87 },
            left: { strength: 85, hand: 86, wrist: 84, arm: 85, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Krasimir Kostadinov",
        image: "img/krasimir_kostadinov.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { toproll: 0.2, hook: 0.7, press: 0.1 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 91, arm: 91, endurance: 88 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 85, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Kydyrgali Ongarbaev",
        image: "img/kydyrgali_ongarbaev.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { hook: 0.1, press: 0.1, toproll: 0.8 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 91, arm: 92, endurance: 89 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 86, endurance: 84 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Marcio Barboza",
        image: "img/marcio_barboza.jpg",
        weightClass: ["Heavyweight"],
        styles: { press: 0.4, hook: 0.5, toproll: 0.1 },
        attributes: {
            right: { strength: 92, hand: 91, wrist: 89, arm: 94, endurance: 87 },
            left: { strength: 86, hand: 85, wrist: 83, arm: 88, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Matt Mask",
        image: "img/matt_mask.jpg",
        weightClass: ["Heavyweight"],
        styles: { hook: 0.1, press: 0.2, toproll: 0.7 },
        attributes: {
            right: { strength: 91, hand: 92, wrist: 90, arm: 91, endurance: 87 },
            left: { strength: 85, hand: 86, wrist: 84, arm: 85, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Oleg Zhokh",
        image: "img/oleg_zhokh.jpg",
        weightClass: ["Lightweight", "Middleweight"],
        styles: { hook: 0.3, press: 0.2, toproll: 0.5 },
        attributes: {
            right: { strength: 80, hand: 81, wrist: 80, arm: 78, endurance: 88 },
            left: { strength: 96, hand: 98, wrist: 99, arm: 98, endurance: 95 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Oleg Petrenko",
        image: "img/oleg_petrenko.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { toproll: 0.3, hook: 0.6, press: 0.1 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 91, arm: 91, endurance: 88 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 85, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Paul Linn",
        image: "img/paul_linn.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { hook: 0.35, press: 0.35, toproll: 0.3 },
        attributes: {
            right: { strength: 90, hand: 93, wrist: 90, arm: 92, endurance: 89 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 86, endurance: 84 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Revaz Lutidze",
        image: "img/revaz_lutidze.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.4, press: 0.3, toproll: 0.3 },
        attributes: {
            right: { strength: 94, hand: 92, wrist: 90, arm: 91, endurance: 87 },
            left: { strength: 85, hand: 86, wrist: 84, arm: 85, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Ron Bath",
        image: "img/ron_bath.jpg",
        weightClass: ["Heavyweight"],
        styles: { press: 0.6, hook: 0.3, toproll: 0.1 },
        attributes: {
            right: { strength: 92, hand: 91, wrist: 89, arm: 94, endurance: 87 },
            left: { strength: 86, hand: 85, wrist: 83, arm: 88, endurance: 82 }
        },
        fatigue: 90,
        fatigueRecovery: 0.9
    },
    {
        name: "Rustam Babayev",
        image: "img/rustam_babayev.jpg",
        weightClass: ["Lightweight", "Middleweight", "Heavyweight"],
        styles: { toproll: 0.2, hook: 0.7, press: 0.1 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 94, arm: 93, endurance: 90 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 85, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Sandris Sedis",
        image: "img/sandris_sedis.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.35, press: 0.35, toproll: 0.3 },
        attributes: {
            right: { strength: 92, hand: 93, wrist: 91, arm: 92, endurance: 89 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 86, endurance: 84 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Sasho Andreev",
        image: "img/sasho_andreev.jpg",
        weightClass: ["Lightweight", "Middleweight"],
        styles: { hook: 0.8, press: 0.1, toproll: 0.1 },
        attributes: {
            right: { strength: 91, hand: 92, wrist: 94, arm: 91, endurance: 87 },
            left: { strength: 85, hand: 86, wrist: 84, arm: 85, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Tim Bresnan",
        image: "img/tim_bresnan.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { press: 0.6, hook: 0.3, toproll: 0.1 },
        attributes: {
            right: { strength: 91, hand: 91, wrist: 89, arm: 94, endurance: 87 },
            left: { strength: 86, hand: 85, wrist: 83, arm: 88, endurance: 82 }
        },
        fatigue: 90,
        fatigueRecovery: 0.9
    },
    {
        name: "Tobias Sporrong",
        image: "img/tobias_sporrong.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { toproll: 0.6, hook: 0.3, press: 0.1 },
        attributes: {
            right: { strength: 94, hand: 93, wrist: 91, arm: 91, endurance: 88 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 85, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Todd Hutchings",
        image: "img/todd_hutchings.jpg",
        weightClass: ["Middleweight", "Heavyweight"],
        styles: { hook: 0.35, press: 0.35, toproll: 0.3 },
        attributes: {
            right: { strength: 96, hand: 95, wrist: 91, arm: 96, endurance: 92 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 86, endurance: 84 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Travis Bagent",
        image: "img/travis_bagent.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.5, press: 0.1, toproll: 0.4 },
        attributes: {
            right: { strength: 91, hand: 92, wrist: 90, arm: 91, endurance: 87 },
            left: { strength: 95, hand: 92, wrist: 90, arm: 89, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Wagner Bortolato",
        image: "img/wagner_bortolato.jpg",
        weightClass: ["Heavyweight"],
        styles: { press: 0.6, hook: 0.3, toproll: 0.1 },
        attributes: {
            right: { strength: 92, hand: 91, wrist: 89, arm: 94, endurance: 87 },
            left: { strength: 86, hand: 85, wrist: 83, arm: 88, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Yordan Tsonev",
        image: "img/yordan_tsonev.jpg",
        weightClass: ["Heavyweight"],
        styles: { toproll: 0.3, hook: 0.6, press: 0.1 },
        attributes: {
            right: { strength: 93, hand: 93, wrist: 91, arm: 91, endurance: 88 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 85, endurance: 83 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Zaur Pailualev",
        image: "img/zaur_pailualev.jpg",
        weightClass: ["Heavyweight", "Super Heavyweight"],
        styles: { hook: 0.35, press: 0.35, toproll: 0.3 },
        attributes: {
            right: { strength: 93, hand: 93, wrist: 91, arm: 92, endurance: 89 },
            left: { strength: 86, hand: 87, wrist: 85, arm: 86, endurance: 84 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    },
    {
        name: "Zurab Tavbaridze",
        image: "img/zurab_tavbaridze.jpg",
        weightClass: ["Lightweight", "Middleweight"],
        styles: { hook: 0.5, press: 0.3, toproll: 0.2 },
        attributes: {
            right: { strength: 90, hand: 92, wrist: 90, arm: 91, endurance: 87 },
            left: { strength: 85, hand: 86, wrist: 84, arm: 85, endurance: 82 }
        },
        fatigue: 100,
        fatigueRecovery: 1.0
    }
];

// Expanded Commentary Phrases
const commentaryPhrases = {
    opening: {
        hook: [
            "{player} grips tight, dropping into a deep hook.",
            "{player} starts with a hook, aiming to dominate early.",
            "{player} locks in with a fierce hook, setting the tone.",
            "{player} dives into a classic hook, ready to pull.",
            "{player} plants a strong hook, eyes locked on victory.",
            "{player} initiates with a powerful hook grip."
        ],
        toproll: [
            "{player} launches a sharp top roll, targeting the fingers.",
            "{player} sets up a top roll, ready to pronate hard.",
            "{player} unleashes a vicious top roll assault.",
            "{player} begins with a cunning top roll strategy.",
            "{player} rolls into action with a precise top roll.",
            "{player} starts with a twisting top roll maneuver."
        ],
        press: [
            "{player} leans in with a press, power surging.",
            "{player} starts with a press, looking to crush resistance.",
            "{player} charges forward with a dominant press.",
            "{player} applies a relentless press from the outset.",
            "{player} opens with a thunderous press attack.",
            "{player} pushes with a heavy press, muscles bulging."
        ],
        kings: [
            "{player} falls into the King's Move, playing the long game.",
            "{player} adopts the King's Move, daring a challenge.",
            "{player} settles into the King's Move, biding time.",
            "{player} executes the King's Move with calm precision.",
            "{player} leans back into the King's Move, testing patience.",
            "{player} initiates with the King's Move, a strategic gamble."
        ]
    },
    transitions: {
        hook: {
            new: [
                "{player} shifts to a hook, seeking wrist control.",
                "{player} transitions into a hook, aiming for leverage.",
                "{player} switches to a hook, tightening the grip.",
                "{player} moves to a hook, hunting for wrist dominance.",
                "{player} pivots to a hook, ready to pull hard."
            ],
            continued: [
                "{player} digs deeper into the hook, pulling hard.",
                "{player} intensifies the hook, straining the wrist.",
                "{player} presses the hook further, muscles flexing.",
                "{player} strengthens the hook, refusing to yield.",
                "{player} deepens the hook, fighting for control."
            ]
        },
        toproll: {
            new: [
                "{player} switches to a top roll, attacking the hand.",
                "{player} shifts to a top roll, targeting the fingers.",
                "{player} transitions to a top roll, twisting aggressively.",
                "{player} moves into a top roll, seeking an edge.",
                "{player} pivots to a top roll, aiming to dominate."
            ],
            continued: [
                "{player} cranks the top roll, wrist twisting.",
                "{player} ramps up the top roll, pressure mounting.",
                "{player} intensifies the top roll, fingers under strain.",
                "{player} twists the top roll harder, gaining ground.",
                "{player} keeps the top roll tight, unrelenting force."
            ]
        },
        press: {
            new: [
                "{player} moves to a press, aiming to overpower.",
                "{player} shifts to a press, muscles surging.",
                "{player} transitions into a press, seeking dominance.",
                "{player} switches to a press, pushing with intent.",
                "{player} pivots to a press, ready to crush."
            ],
            continued: [
                "{player} drives the press harder, arm flexing.",
                "{player} intensifies the press, power escalating.",
                "{player} pushes the press further, resistance crumbling.",
                "{player} strengthens the press, muscles straining.",
                "{player} ramps up the press, forcing the issue."
            ]
        },
        kings: {
            new: [
                "{player} drops into the King's Move, conserving strength.",
                "{player} shifts to the King's Move, playing defensively.",
                "{player} transitions to the King's Move, waiting strategically.",
                "{player} moves into the King's Move, biding time.",
                "{player} switches to the King's Move, a tactical retreat."
            ],
            continued: [
                "{player} holds steady in the King's Move, waiting.",
                "{player} maintains the King's Move, patience tested.",
                "{player} sticks with the King's Move, endurance key.",
                "{player} persists in the King's Move, outlasting the foe.",
                "{player} stays firm in the King's Move, a stalwart defense."
            ]
        }
    },
    counters: {
        "hook vs hook": [
            "It's a hook deadlock, wrists straining to the limit!",
            "Both lock in hooks, a test of pure wrist strength!",
            "Hooks collide in a tense standoff, muscles quivering!",
            "A hook battle ensues, each fighter digging in!",
            "The hook clash tightens, wrists pushed to the edge!"
        ],
        "hook vs toproll": [
            "{toproller}'s top roll clashes with {hooker}'s hook!",
            "{toproller} meets {hooker}'s hook with a rolling counter!",
            "{toproller}'s twist battles {hooker}'s firm hook!",
            "{toproller} challenges {hooker}'s hook with a sharp roll!",
            "{toproller} engages {hooker}'s hook in a fierce exchange!"
        ],
        "toproll vs hook": [
            "{toproller} pushes the top roll against {hooker}'s hook!",
            "{toproller} rolls over {hooker}'s stubborn hook!",
            "{toproller} attacks {hooker}'s hook with a twisting move!",
            "{toproller} counters {hooker}'s grip with a top roll!",
            "{toproller} pressures {hooker}'s hook with a roll assault!"
        ],
        "press vs kings": [
            "{presser}'s press meets {kings}'s King's Move resistance!",
            "{presser} tests {kings}'s King's Move with brute force!",
            "{presser}'s power slams into {kings}'s King's Move!",
            "{presser} challenges {kings}'s King's Move endurance!",
            "{presser} pushes against {kings}'s steadfast King's Move!"
        ],
        "kings vs press": [
            "{kings} endures {presser}'s pressing onslaught!",
            "{kings} withstands {presser}'s relentless press!",
            "{kings} holds firm against {presser}'s powerful push!",
            "{kings} resists {presser}'s aggressive press attack!",
            "{kings} counters {presser}'s press with steady defense!"
        ],
        "toproll vs toproll": [
            "Top rolls collide—fingers slipping under pressure!",
            "A top roll duel erupts, hands locked in battle!",
            "Top rolls clash in a whirlwind of twists!",
            "Both fighters trade top rolls, fingers under strain!",
            "Top roll showdown—precision meets raw power!"
        ]
    },
    fatigue: [
        "{player}'s arm trembles, fatigue setting in.",
        "{player} gasps, strength fading fast.",
        "{player}'s muscles quiver, exhaustion creeping in.",
        "{player} struggles, fatigue taking its toll.",
        "{player}'s energy wanes, arm shaking with effort.",
        "{player} breathes heavily, fatigue wearing them down."
    ],
    roundWin: [
        "{player} takes the round with a solid {style}!",
        "{player} secures the round with a masterful {style}!",
        "{player} claims the round using a powerful {style}!",
        "{player} dominates the round with a strong {style}!",
        "{player} wins the round with a decisive {style}!"
    ],
    flashPin: [
        "{winner} slams {loser} down with a lightning {style}!",
        "{winner} crushes {loser} with a swift {style} strike!",
        "{winner} pins {loser} with a blazing {style} move!",
        "{winner} overpowers {loser} with a rapid {style} finish!",
        "{winner} flattens {loser} with a sudden {style} attack!"
    ],
    finish: [
        "{winner} claims victory over {loser} in a brutal {hand} supermatch!",
        "{winner} triumphs over {loser} in a fierce {hand} showdown!",
        "{winner} emerges victorious against {loser} in a grueling {hand} match!",
        "{winner} conquers {loser} in an epic {hand} supermatch!",
        "{winner} outlasts {loser} in a thrilling {hand} battle!"
    ]
};
