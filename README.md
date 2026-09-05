# CV

Markdown-based CV. The single source of truth is [`src/cv.md`](src/cv.md).

It is rendered and published by [cvmd.sh](https://cvmd.foreignkey.sh) on every push to `main`, as a web page and as a PDF.

Live version: _[add URL once cvmd.sh is connected]_

## Editing

Edit `src/cv.md` and push to `main`. That is the whole workflow.

The YAML frontmatter at the top of `cv.md` holds theme overrides (Tailwind classes) for the renderer. Content and theme are kept separate on purpose: if the renderer ever changes, the content does not.

## Optional: local PDF upload

`scripts/upload-cv.ts` uploads an already-built `pdf/cv.pdf` to Vercel Blob. It is a fallback for hosting the PDF independently of cvmd.sh.

```sh
cp .env.example .env   # set BLOB_READ_WRITE_TOKEN
npm install
npm run upload-cv
```

`pdf/` and `.env` are git-ignored.
