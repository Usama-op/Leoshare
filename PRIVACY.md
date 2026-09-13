# Privacy Policy

**Last updated:** 2026

LioShare ("the app", "we", "our") is a static, client-side web app for peer-to-peer file sharing. This policy explains what happens to your data when you use it.

## 1. No File Storage

LioShare never uploads, stores, or has access to the files you send. Files are streamed directly between the sender's and receiver's browsers over an encrypted WebRTC `RTCDataChannel`. No copy of any file ever passes through or is retained on a server operated by us or anyone else.

## 2. No Accounts, No Personal Data Collection

- There is no sign-up, login, or user profile.
- We do not collect names, emails, phone numbers, or any other personal identifiers.
- We do not use cookies, analytics, tracking pixels, or advertising SDKs.

## 3. Signalling & Connection Data

To connect two devices, LioShare uses a lightweight signalling step (via a public PeerJS broker) and public STUN/TURN servers, as required by the WebRTC standard used by all peer-to-peer apps (including video calls). This process:

- Exchanges only the technical information needed to establish a direct connection (e.g. a Room ID and network connection candidates).
- Does not transmit, expose, or store file contents or chat messages.
- Is transient — this data is used only to open the connection and is not retained afterward by LioShare.

If you self-host your own signalling/STUN/TURN infrastructure, that infrastructure is under your own control and this policy does not extend to it.

## 4. Chat Messages

Chat messages sent through the app travel over the same encrypted peer-to-peer data channel as files. They are not logged, stored, or accessible to us.

## 5. Local Device Storage

The Service Worker (`sw.js`) caches the app's static assets (HTML, CSS, JS) on your device so the app loads instantly and works offline. This cached data:

- Contains only the app shell, never your files or messages.
- Stays on your device and can be cleared at any time by clearing your browser's site data.

## 6. Third-Party Services

The only third-party infrastructure involved is the public STUN/TURN/signalling service used to negotiate WebRTC connections. We do not integrate any analytics, advertising, or social tracking services. If you deploy LioShare on your own hosting provider (e.g. GitHub Pages, Netlify, Vercel), that host's own privacy practices and standard web server logs (such as IP address in access logs) may apply independently of this policy.

## 7. Children's Privacy

LioShare does not knowingly collect personal information from anyone, including children, because it collects no personal information at all by design.

## 8. Changes to This Policy

If this policy changes, the updated version will be published in this repository with a revised "Last updated" date.

## 9. Contact

For questions about this policy or the project, please open an issue in this repository.

---

*This document describes the privacy behavior of the LioShare application as published in this repository. If you fork, modify, or self-host LioShare, you are responsible for your own deployment's privacy practices.*
