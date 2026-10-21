# WILD / STORIES — Galeria Interativa de Animais

Atividade SPA com React (Vite), Tailwind CSS v4, Lucide React e i18next
(internacionalização em português, inglês e espanhol).

Galeria interativa com cinco animais (cachorros, urso, panda-gigante, leão e
girafas), apresentando imagem, título e curiosidades, com navegação por botões,
indicadores e teclado (setas ← →). O idioma pode ser alternado no header
(PT / EN / ES) e a preferência fica salva no navegador.

## Executar

```bash
npm install
npm run dev
```

## Scripts

| Comando         | Descrição                |
| --------------- | ------------------------ |
| `npm run dev`   | Servidor de desenvolvimento |
| `npm run build` | Build de produção        |
| `npm run lint`  | Verificação com ESLint   |

## Estrutura

```
src/
├── App.jsx                  # Layout da página (header, main, footer)
├── i18n/
│   └── index.js             # Inicialização do i18next (detecção e persistência)
├── locales/
│   ├── pt.json              # Textos em português
│   ├── en.json              # Textos em inglês
│   └── es.json              # Textos em espanhol
├── components/
│   ├── Background.jsx       # Fundo decorativo da galeria
│   ├── ImageSlider.jsx      # Slider com estado, teclado e transições
│   ├── LanguageSwitcher.jsx # Seletor de idioma (PT / EN / ES)
│   └── SliderControls.jsx   # Botões, indicadores e contador
└── data/
    └── slides.js            # Ids e imagens dos 5 animais
```

## Internacionalização

- Biblioteca: `i18next` + `react-i18next`
- Idiomas: `pt` (padrão/fallback), `en`, `es`
- Detecção inicial pelo idioma do navegador, com override salvo em
  `localStorage` (`wild-stories-lang`)
- Todo o texto visível (títulos, curiosidades, textos alternativos e labels
  acessíveis) é obtido via `useTranslation()` a partir de `src/locales/*.json`
