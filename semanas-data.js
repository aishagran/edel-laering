const semanasData = [
  {
    id: 1,
    titulo: "Uma História Sem Fim - Edel",
    subtitulo: "Edel descobre o livro mágico",
    semana: "Semana 1",
    livro: "Den uendelige historien",
    cores: {
      bg: "#f5f3e8",
      accent: "#8b4513",
      palavra: "#c41e3a"
    },
    paineis: [
      { numero: 1, titulo: "Edel", descricao: "Dette er Edel. Moren hennes døde da hun var liten. Hun savner hennes hver dag. Edel er ofte trist og føler seg alene." },
      { numero: 2, titulo: "Ikke snill mot henne", descricao: "På skolen er noen barn ikke snille med Edel. De ler av hennes fordi hun er stille og liker å lese. Edel føler seg utenfor." },
      { numero: 3, titulo: "En dårlig dag", descricao: "Denne dagen blir det for mye. Edel orker ikke mer. Hun vil bare bort fra alt og vårene alene. Hun går uten mål og mening." },
      { numero: 4, titulo: "Edel finner en bok", descricao: "Edel går inn i en gammel bokhandel. Der finner hun en spesiell bok med en tittel som fanger hennes med en gang." },
      { numero: 5, titulo: "Den uendelige historien", descricao: "Boka heter Den uendelige historien. Edel har aldri sett en bok som denne før. Hun føler at den er magisk." },
      { numero: 6, titulo: "For sent til skolen", descricao: "Edel glemmer tiden. Nå er det for sent å gå til timene. Hun er redd for læreren og vet ikke hva hun skal gjøre." },
      { numero: 7, titulo: "Edel gjemmer seg", descricao: "Hun finner veien opp til loftet på skolen. Det er stille. Ingen vet at hun er der. Edel gjemmer seg for å være i fred." },
      { numero: 8, titulo: "Hun begynner å lese", descricao: "Edel åpner boka og begynner å lese. Historien virker så ekte at hun nesten glemmer hvor hun er." }
    ],
    palavras: [
      {
        ord: "oppdrag",
        definisjon: "Et oppdrag er noe viktig du må gjøre.",
        eksempler: [
          "Har Atreyu et oppdrag?",
          "Hva er ditt oppdrag i dag?",
          "Kan Pipoka ha et oppdrag?"
        ],
        rede: ["mål", "plan", "hjelpe", "redde", "fullføre"]
      },
      {
        ord: "beskrive",
        definisjon: "Å beskrive er å fortelle hvordan noe eller noen ser ut.",
        eksempler: [
          "Kan du beskrive Edel?",
          "Beskriv boka.",
          "Beskriv hesten.",
          "Beskriv rommet."
        ],
        strukturer: ["Han har…", "Hun er…", "Den ser…", "Jeg synes…"],
        rede: ["fortelle", "forklare", "si", "vise", "hvordan ser den ut?"]
      },
      {
        ord: "intet",
        definisjon: "Intet betyr at det ikke er noe. Ikke noe i det hele tatt.",
        eksempler: [
          "Hva er Intet?",
          "Er Intet en person?",
          "Er Intet et dyr?",
          "Hva gjør Intet?",
          "Hvis håpet forsvinner, føles det nesten som Intet."
        ],
        rede: ["tomt", "ingenting", "forsvinne", "destruksjon"]
      },
      {
        ord: "fantasia",
        definisjon: "Fantasia er det magiske landet i historien.",
        eksempler: [
          "Hva er Fantasia?",
          "Er Fantasia et land?",
          "Hvem bor der?",
          "Hvordan vil du beskrive Fantasia?"
        ],
        rede: ["land", "magi", "drøm", "verden", "adventure"]
      },
      {
        ord: "mot",
        definisjon: "Mot betyr at du tør å gjøre noe selv om du er redd.",
        eksempler: [
          "Hva betyr mot?",
          "Har Bastian mot?",
          "Har Atreyu mot?",
          "Når trenger vi mot?",
          "Trenger man mot for å begynne på en ny skole?"
        ],
        rede: ["modig", "redd", "tørre", "prøve", "hjelpe", "fortsette"]
      }
    ],
    quiz: [
      { spørsmål: "Hvem er hovedpersonen i historien?", svar: "Edel" },
      { spørsmål: "Hvorfor føler Edel seg alene?", svar: "Hennes mor døde da hun var liten" },
      { spørsmål: "Hva finner Edel i bokhandelen?", svar: "En spesiell bok - Den uendelige historien" },
      { spørsmål: "Hvor gjemmer Edel seg?", svar: "I loftet på skolen" },
      { spørsmål: "Hva gjør Edel når hun åpner boka?", svar: "Hun begynner å lese" }
    ],
    viktigeOrd: [
      { ord: "oppdrag", emoji: "🎯", forklaring: "En viktig oppgave man må gjøre" },
      { ord: "beskrive", emoji: "🖼️", forklaring: "Fortelle hvordan noe ser ut" },
      { ord: "intet", emoji: "☁️", forklaring: "Ingenting, tomt" },
      { ord: "fantasia", emoji: "✨", forklaring: "Det magiske landet i historien" },
      { ord: "mot", emoji: "💪", forklaring: "Å tørre å gjøre noe man er redd for" }
    ]
  },

  {
    id: 2,
    titulo: "Uma História Sem Fim - Auryn",
    subtitulo: "Det magiske smykket",
    semana: "Semana 2",
    livro: "Den uendelige historien",
    cores: {
      bg: "#fff8e7",
      accent: "#d4af37",
      palavra: "#8b0000"
    },
    paineis: [
      { numero: 1, titulo: "Auryn", descricao: "Auryn er et magisk smykke som slanger. Det finnes bare ett Auryn, og det er et symbol på Fantasia." },
      { numero: 2, titulo: "Hvem beskytter Auryn?", descricao: "Auryn holder landet Fantasia. Alt forsvinner litt etter litt: træer, fjell, dyr og mennesker. Hvis Intet vinner, vil Fantasia døe ut helt." }
    ],
    palavras: [
      {
        ord: "sørg",
        definisjon: "Sørg er en følelse når du er lei deg fordi noe dårlig har skjedd.",
        eksempler: [
          "Hvorfor sørger folket i Fantasia?",
          "Hva gjør sørgen med landet?",
          "Kan sørg være stor?"
        ],
        rede: ["lei seg", "trist", "gråte", "smerte", "tap"]
      },
      {
        ord: "håp",
        definisjon: "Håp er tro på at noe godt skal skje.",
        eksempler: [
          "Hvem gir landet håp?",
          "Hva skjer hvis håpet forsvinner?",
          "Trenger Fantasia håp?"
        ],
        rede: ["tro", "forventning", "drøm", "mulighet"]
      },
      {
        ord: "tro",
        definisjon: "Å tro er å vite at noe er sant eller at det skal bli bra.",
        eksempler: [
          "Tror Atreyu på seg selv?",
          "Hva må Bastian tro på?",
          "Kan tro redde Fantasia?"
        ],
        rede: ["trofasthet", "trygget", "sikkerhet", "visshet"]
      },
      {
        ord: "amulett",
        definisjon: "En amulett er et magisk smykke som beskytter.",
        eksempler: [
          "Hva er Auryn?",
          "Hvordan beskytter Auryn?",
          "Hvem kan bære Auryn?"
        ],
        rede: ["smykke", "magi", "kraft", "beskyttelse", "symbol"]
      },
      {
        ord: "kraft",
        definisjon: "Kraft er styrke og evne til å gjøre noe.",
        eksempler: [
          "Har Auryn kraft?",
          "Hvor kommer kraften fra?",
          "Hva kan kraft gjøre?"
        ],
        rede: ["styrke", "evne", "energi", "magi", "power"]
      }
    ],
    quiz: [
      { spørsmål: "Hva er Auryn?", svar: "Et magisk smykke som slanger" },
      { spørsmål: "Hva truer Fantasia?", svar: "Intet" },
      { spørsmål: "Hvorfor er Auryn viktig?", svar: "Det beskytter landet Fantasia" }
    ],
    viktigeOrd: [
      { ord: "sørg", emoji: "😢", forklaring: "Å være lei seg" },
      { ord: "håp", emoji: "🌟", forklaring: "Tro på at noe godt skal skje" },
      { ord: "tro", emoji: "✨", forklaring: "Å vite at noe er sant" },
      { ord: "amulett", emoji: "✨", forklaring: "Magisk smykke som beskytter" },
      { ord: "kraft", emoji: "💪", forklaring: "Styrke og evne" }
    ]
  },

  {
    id: 3,
    titulo: "Bastion",
    subtitulo: "En gutt som liker å lese",
    semana: "Semana 3",
    livro: "Bastion og Den uendelige historien",
    cores: {
      bg: "#e8f4f8",
      accent: "#1e3a8a",
      palavra: "#0369a1"
    },
    painels: [
      { numero: 1, titulo: "Bastian finner en bok", descricao: "Bastian er en gutt som liker å lese. Han savner moren sin og blir plaget på skolen. En dag går han inn i en bok som heter Den uendelige historien." }
    ],
    palavras: [
      {
        ord: "fantasi",
        definisjon: "Fantasi er å bruke fantasien - å drømme og tenke på ting som ikke finnes.",
        eksempler: [
          "Hva er fantasi?",
          "Bruker Bastian fantasien?",
          "Hvordan bruker han fantasien?"
        ],
        rede: ["drøm", "fantasi", "magisk", "kreativ", "tenking"]
      },
      {
        ord: "mod",
        definisjon: "Mod betyr å være modig - å tørre å gjøre noe vanskelig.",
        eksempler: [
          "Trenger Bastian mod?",
          "Hvem er modig i historien?",
          "Hvordan viser man mod?"
        ],
        rede: ["modig", "tørre", "redd", "sterk", "tapper"]
      },
      {
        ord: "oppdrag",
        definisjon: "En spesiell oppgave som er viktig å fullføre.",
        eksempler: [
          "Hva er Bastians oppdrag?",
          "Hvem gir ham oppdraget?",
          "Hvorfor må han fullføre det?"
        ],
        rede: ["oppgave", "mål", "ansvar", "misjon"]
      },
      {
        ord: "bok",
        definisjon: "En bok er et objekt med sider som inneholder ord og historier.",
        eksempler: [
          "Hva slags bok finner Bastian?",
          "Hva gjør boka?",
          "Er boka magisk?"
        ],
        rede: ["historie", "tekst", "lesing", "ord", "siden"]
      },
      {
        ord: "verden",
        definisjon: "En verden er et helt univers - alle stedene og personene sammen.",
        eksempler: [
          "Hvilken verden leser Bastian om?",
          "Finnes verden?",
          "Er verden i boka ekte?"
        ],
        rede: ["land", "miljø", "plass", "univers", "eksistens"]
      }
    ],
    quiz: [
      { spørsmål: "Hvem er Bastian?", svar: "En gutt som liker å lese" },
      { spørsmål: "Hva finner Bastian?", svar: "En spesiell bok som heter Den uendelige historien" },
      { spørsmål: "Hvorfor leser Bastian boka?", svar: "Han vil rømme fra sitt vanskelige liv" }
    ],
    viktigeOrd: [
      { ord: "fantasi", emoji: "🎨", forklaring: "Å drømme og tenke kreativt" },
      { ord: "mod", emoji: "💪", forklaring: "Å være modig" },
      { ord: "oppdrag", emoji: "🎯", forklaring: "En viktig oppgave" },
      { ord: "bok", emoji: "📚", forklaring: "Noe med historier" },
      { ord: "verden", emoji: "🌍", forklaring: "Et helt univers" }
    ]
  }
];

// Exportar para HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = semanasData;
}
