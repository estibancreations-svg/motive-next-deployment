# Source Manifest

This repository mirrors the contents of a Google Drive folder named `motive_next_deployment_bundle Nov 4` (Drive folder ID `1bnIjQGvpSwISuZKieez2pPyL19SGkeKX`), located during a broader GitHub-mirroring pass on 2026-09-21.

## What was found in Drive

Two folders in Drive reference "Motive Next":

1. **`motive_next_deployment_bundle Nov 4`** — contained real, readable file content (the 7 files mirrored into this repo, listed below). This is what was mirrored here.
2. **`motive-next-deployment Sep 5`** (and a nested subfolder of the same name) — every file in this tree, except a `.DS_Store`, appears in Drive as an empty folder named after the original filename (e.g. a folder literally named `package.json`, a folder named `netlify.toml`, etc.) with no retrievable file content. This looks like a corrupted or failed upload/sync and could not be recovered. It has NOT been mirrored.

## Mirrored into this repo

- `index.html` (223 B) — a minimal one-paragraph placeholder page ("Welcome to MOTIVE NEXT")
- `netlify.toml` (68 B) — points Netlify at `netlify/functions` for serverless functions, enables analytics
- `_redirects` (38 B) — routes `/api/*` to Netlify Functions
- `robots.txt` (24 B) — allows all crawlers
- `netlify/functions/billing-process-daily.js` (895 B) — a serverless function that creates a Stripe PaymentIntent for a given customer/amount, with logging and a metric emit
- `netlify/functions/shared/logger.js` (339 B) — Winston logger (console + file transport)
- `netlify/functions/shared/monitor.js` (431 B) — posts a custom metric to the Datadog API

That is the complete, real content of the Nov 4 bundle — nothing was held back. It is a small, single-purpose bundle (a placeholder landing page plus one billing webhook function), not a full application.

## Not mirrored — binary

The Drive folder also contains `MOTIVE NEXT - Complete Deployment Bundle.pdf` (1.5 MB, in the parent folder alongside `motive_next_deployment_bundle Nov 4`). This is a binary PDF and was not opened or mirrored as part of this pass; it may contain additional documentation or context about the full system. Can be reviewed/added on request.

## Open question — not resolved here

The `THELMA-Global-Link-Logistics` repository in this same account carries a description referring to itself as "formerly referenced as Motive Next." The bundle mirrored here (a Stripe billing function plus a placeholder page) does not resemble THELMA's actual codebase (a React/Flask multi-agent dispatch and fleet-command system). Whether "Motive Next" here refers to the same project under an old name, an unrelated earlier prototype, or a different subsystem (e.g. a billing microservice) has not been determined and is left for a follow-up decision.
