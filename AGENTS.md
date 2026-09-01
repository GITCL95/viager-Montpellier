# Viager Montpellier — guide projet

Site Next.js pour **viager-montpellier.fr**. Ouvrir ce dossier (`viager-montpellier-web`) directement dans Cursor.

## Structure simplifiée

```
src/
  lib/
    seo.ts          ← téléphone, adresse, métadonnées SEO
    site-data.ts    ← contenu accueil (biens, équipe, FAQ…)
  components/       ← blocs réutilisables (Header, Hero, Footer…)
  app/
    page.tsx        ← accueil (/)
    contact/        ← page contact
    viager-*/       ← pages SEO locales (1 dossier = 1 URL)
```

## Modifier sans renvoyer les fichiers

Dans Cursor, décrivez simplement ce que vous voulez changer. L'agent peut :

- parcourir le projet tout seul ;
- trouver la bonne page via son URL ou son nom ;
- appliquer les changements et pousser sur GitHub.

Exemples de demandes :

- « Change le numéro de téléphone partout »
- « Modifie le texte de la page viager Sète »
- « Ajoute un bien en viager sur l'accueil »

## Fichiers les plus utiles

| Modification | Fichier |
|---|---|
| Téléphone / adresse / SEO | `src/lib/seo.ts` |
| Menu navigation | `src/lib/site-data.ts` |
| Biens, équipe, témoignages | `src/lib/site-data.ts` |
| Page locale (Sète, Nîmes…) | `src/app/viager-<ville>/page.tsx` |
| Formulaire contact | `src/components/ContactForm.tsx` |

## Commandes

```bash
npm run dev    # prévisualiser en local (http://localhost:3000)
npm run build  # vérifier le build
git push       # déployer (Vercel connecté à GitHub)
```

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
