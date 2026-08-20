# 원진녹색병원 장례식장

원진녹색병원 장례식장 안내 홈페이지입니다. React와 Vite로 만들었으며 GitHub Pages에 배포합니다.

- 주소: 경기도 구리시 동구릉로 65 (인창동)
- 장례식장 전화: 031-552-5119

## 로컬 실행

```bash
npm install
npm run dev
```

## GitHub Pages 배포

1. 이 저장소를 GitHub에 올립니다. 저장소 이름은 `gurigreenhospital` 이어야 합니다. (`vite.config.js`의 `base`가 `/gurigreenhospital/` 입니다.)
2. GitHub 저장소 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 선택합니다.
3. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 사이트를 빌드하고 배포합니다.
4. 배포 주소: `https://<계정이름>.github.io/gurigreenhospital/`

저장소 이름이 다르면 `vite.config.js`의 `base` 값을 `/저장소이름/`으로 맞춰 주세요.
