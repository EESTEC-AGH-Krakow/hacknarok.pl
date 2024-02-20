# Hacknarok.pl

Strona hackathonu Hacknarök - napisana w React.

## Jak uruchomić

1. Po pierwsze potrzebujesz [node.js](https://nodejs.org/en/download)
2. Zainstaluj wszystkie potrzebne paczki

```
npm ci
```

3. Uruchom projekt

```
npm run dev
```

## Jak dodać zmiany

1. Utwórz nowego brancha

```
git checkout -b zmiana-logo-partnerów
```

2. Na nowym branchu wrzuć swoje zmiany i scommituj
3. W zakładce Pull requests stwórz nowy Pull request do `developa`. Po akceptacji zmian przez ownera zmiana wejdzie do developa.

## Deployment

~~Strona wykorzystuje Travis CI do deploymentu. [Strona repozytorium na Travisie](https://app.travis-ci.com/github/EESTEC-AGH-Krakow/hacknarok.pl).~~

~~W momencie mergowania do brancha `develop` stronka zdeployuje się na [dev.hacknarok.pl](dev.hacknarok.pl).~~

~~W momencie mergowania do brancha `master` stronka zdeployuje się na [hacknarok.pl](hacknarok.pl).~~

Travis CI zmienił swoje plany taryfowe wiec na moment obecny (20/02/2024) nie posiadamy CI/CD. Aby wykonac deployment recznie, polacz sie przez SSH do serwera MyDevil i wpisz nastepujaca komende:

`./deployments/deploy_hack.sh`

Na czas awarii wskaznik (...)/hacknarok.pl/public_nodejs/public jest ustawiony na repo zaciagniete repo zamiast przeslany build z Travisa.
