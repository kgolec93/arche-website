import projectImg01 from '../assets/landing-page/01.jpg'
import projectImg02 from '../assets/landing-page/02.jpg'
import projectImg03 from '../assets/landing-page/03.jpg'
import projectImg04 from '../assets/landing-page/04.jpg'
import projectImg05 from '../assets/landing-page/05.jpg'

import odrzanska01 from '../assets/projects/odrzanska/01.jpg'
import odrzanska02 from '../assets/projects/odrzanska/02.jpg'
import odrzanska03 from '../assets/projects/odrzanska/03.jpg'
import odrzanska04 from '../assets/projects/odrzanska/04.jpg'
import odrzanska05 from '../assets/projects/odrzanska/05.jpg'

import kolobrzeg01 from '../assets/projects/kolobrzeg/01.jpg'
import kolobrzeg02 from '../assets/projects/kolobrzeg/02.jpg'
import kolobrzeg02a from '../assets/projects/kolobrzeg/02a.jpg'
import kolobrzeg03 from '../assets/projects/kolobrzeg/03.jpg'
import kolobrzeg03a from '../assets/projects/kolobrzeg/03a.jpg'
import kolobrzeg04 from '../assets/projects/kolobrzeg/04.jpg'
import kolobrzeg05 from '../assets/projects/kolobrzeg/05.jpg'
import kolobrzeg06 from '../assets/projects/kolobrzeg/06.jpg'
import kolobrzeg07 from '../assets/projects/kolobrzeg/07.jpg'
import kolobrzeg08 from '../assets/projects/kolobrzeg/08.jpg'
import kolobrzeg09 from '../assets/projects/kolobrzeg/09.jpg'
import kolobrzeg10 from '../assets/projects/kolobrzeg/10.jpg'
import kolobrzeg11 from '../assets/projects/kolobrzeg/11.jpg'
import kolobrzeg12 from '../assets/projects/kolobrzeg/12.jpg'
import kolobrzeg13 from '../assets/projects/kolobrzeg/13.jpg'
import kolobrzeg14 from '../assets/projects/kolobrzeg/14.jpg'

import osobowice01 from '../assets/projects/osobowice/01.jpg'
import osobowice02 from '../assets/projects/osobowice/02.jpg'

import jodlowa01 from '../assets/projects/jodlowa/01.jpg'
import jodlowa02 from '../assets/projects/jodlowa/02.jpg'
import jodlowa03 from '../assets/projects/jodlowa/03.jpg'
import jodlowa04 from '../assets/projects/jodlowa/04.jpg'
import jodlowa05 from '../assets/projects/jodlowa/05.jpg'

import karpniki01 from '../assets/projects/karpniki/01.jpg'
import karpniki02 from '../assets/projects/karpniki/02.jpg'
import karpniki03 from '../assets/projects/karpniki/03.jpg'
import karpniki04 from '../assets/projects/karpniki/04.jpg'
import karpniki05 from '../assets/projects/karpniki/05.jpg'

import tarasy01 from '../assets/projects/tarasy-grabiszynskie/01.jpg'
import tarasy02 from '../assets/projects/tarasy-grabiszynskie/02.jpg'
import tarasy03 from '../assets/projects/tarasy-grabiszynskie/03.jpg'

import kleczkow01 from '../assets/projects/port-kleczkow/01.jpg'
import kleczkow02 from '../assets/projects/port-kleczkow/02.jpg'
import kleczkow03 from '../assets/projects/port-kleczkow/03.jpg'
import kleczkow04 from '../assets/projects/port-kleczkow/04.jpg'
import kleczkow05 from '../assets/projects/port-kleczkow/04.jpg'
import kleczkow06 from '../assets/projects/port-kleczkow/06.jpg'

import volvo01 from '../assets/projects/volvo/01.jpg'
import volvo02 from '../assets/projects/volvo/02.jpg'
import volvo03 from '../assets/projects/volvo/03.jpg'
import volvo04 from '../assets/projects/volvo/04.jpg'

import krawiecka01 from '../assets/projects/krawiecka/01.jpg'
import krawiecka02 from '../assets/projects/krawiecka/02.jpg'
import krawiecka03 from '../assets/projects/krawiecka/03.jpg'
import krawiecka04 from '../assets/projects/krawiecka/04.jpg'
import krawiecka05 from '../assets/projects/krawiecka/04.jpg'
import krawiecka06 from '../assets/projects/krawiecka/06.jpg'


export const data = 
    [
        {
            section: 'nasza oferta',
            url: '/offer'
        },
        {
            section: 'realizacje',
            url: '/projects',
            projects: [
                {
                    name: 'Odrzańska Residence',
                    url: 'odrzanska',
                    type: 'housing',
                    projectYear: '2018',
                    constructionYear: '2019-2020',
                    location: 'Wrocław, ul. Odrzańska',
                    description: `Projekt obejmuje przebudowę plomby przy ulicy Odrzańskiej 11 we Wroclawiu. Nowa elewacja nawiązuje do bryły dawnych kamienic stojących przed drugą wojną światową w tym miejscu. W przebudowanym budynku zaprojektowano nowoczesne apartamenty oraz restaurację w parterze.`,
                    alt: 'Odrzańska Residence Wrocław',
                    testImg: projectImg01,
                    images: [odrzanska01, odrzanska02, odrzanska03, odrzanska04, odrzanska05]
                },
                {
                    name: 'Hotel Woźniak',
                    url: 'hotel-kolobrzeg',
                    type: 'public',
                    projectYear: '2018-2019',
                    constructionYear: '2021 (planowana)',
                    location: 'Kołobrzeg, ul. Sułkowskiego',
                    description: `Koncepcja kompleksu hotelowego przy ul. Sułkowskiego w Kołobrzegu. Projekt zakłada budowę luksusowego, pięciogwiazdkowego budynku hotelowego na 800 pokoi wraz zapleczem i parkingiem podziemnym. Ponadto przewidziono dużą salę konferencyjną dla 1500 osób z funkcjami pomocniczymi, dużym zapleczem gastronomicznym oraz rozbudowaną część zawierającą baseny i spa`,
                    alt: 'Hotel Kołobrzeg',
                    images: [kolobrzeg01, kolobrzeg02, kolobrzeg02a, kolobrzeg03, kolobrzeg03a, kolobrzeg04, kolobrzeg05, kolobrzeg06, kolobrzeg07, kolobrzeg08, kolobrzeg09, kolobrzeg10, kolobrzeg11, kolobrzeg12, kolobrzeg13, kolobrzeg14],
                    testImg: projectImg02,
                },
                {
                    name: 'Folwark Osobowice',
                    url: 'folwark-osobowice',
                    type: 'housing',
                    projectYear: '2018',
                    constructionYear: '2018 - obecnie',
                    location: 'Wrocław, Osobowice',
                    description: `Projekt rewitalizacji oraz przebudowy dwóch budynków dawnego Folwarku na Osobowicach, objętych ochroną konserwatorską, na zespół mieszkaniowy. Wprowadzając nowe funkcje jednocześnie starano się zachować oryginalny charakter tego miejsca.`,
                    alt: 'Folwark Osobowice',
                    images: [osobowice01, osobowice02],
                    testImg: projectImg03,
                },
                {
                    name: 'Jodłowa',
                    url: 'jodlowa-wroclaw',
                    type: 'housing',
                    projectYear: '2017',
                    constructionYear: '2018 - obecnie',
                    location: 'Wrocław',
                    description: `Budynek wielorodzinny przy ulicy Jodłowej we Wrocławiu, w zabudowie plombowej.`,
                    alt: 'Jodłowa Wrocław',
                    images: [jodlowa01, jodlowa02,  jodlowa03,  jodlowa04,  jodlowa05],
                },
                {
                    name: 'Zamek w Karpnikach',
                    url: 'zamek-karpniki',
                    type: 'public',
                    projectYear: '2009',
                    constructionYear: '2011 - 2014',
                    location: 'Karpniki',
                    description: `Zamek zbudowany w XIV wieku, kilkakrotnie przebudowywany. Jego obecny, neogotycki wygląd autorstwa Friedricha Augusta Stülera pochodzi z połowy XIX wieku. W 2014 roku ukończono generalny remont i renowację obiektu, zgodnie z projektem przekształcając go w luksusowy, pięciogwiazdkowy hotel.`,
                    alt: 'Zamek w Karpnikach',
                    images: [karpniki01, karpniki02, karpniki03, karpniki04, karpniki05]
                },
                {
                    name: 'Tarasy Grabiszyńskie',
                    url: 'tarasy-grabiszynskie',
                    type: 'public',
                    projectYear: '2015',
                    constructionYear: '2017',
                    location: 'Wrocław, ul. Grabiszyńska',
                    description: `Inwestycja jest przedsięwzięciem mającym na celu przebudowę istniejącego na terenie opracowania obiektu handlowo-usługowego – pawilonu powstałego w pierwszej połowie lat 70. XX w. i dostosowanie go do aktualnych potrzeb funkcjonalnych, realiów ekonomicznych, wymogów i norm budowlanych i instalacyjnych jak również współczesnych standardów estetycznych. Inwestycja znajduje się w południowo-zachodniej części miasta, w dzielnicy Fabryczna, na osiedlu Grabiszyn-Grabiszynek, w odległości ok 4km od ścisłego centrum miasta, przy skrzyżowaniu dużych miejskich ulic: Grabiszyńskiej i Hallera.`,
                    alt: 'Tarasy Grabiszyńskie',
                    images: [tarasy01, tarasy02, tarasy03]
                },
                {
                    name: 'Port Miejski we Wrocławiu',
                    url: 'port-kleczkow',
                    type: 'housing',
                    projectYear: '2017',
                    constructionYear: '-',
                    location: 'Wrocław, Kleczkowska',
                    description: `Projekt rewitalizacji obszaru dawnego portu miejskiego z początków XX wieku we Wroclawiu. Załozenie obejmuje wprowadzenie nowej funkcji hotelowo-biurowej do dwóch zabytkowych budynków - spichlerza oraz magazynu portowego oraz przebudowę elewatora zbożowego. Ponadto koncepcja przewiduje możlwą dalszą przemianę tego terenu pod kolejne inwestycje, w kierunku zachodnim, wzdłuż nabrzeża.`,
                    alt: 'Port Miejski we Wrocławiu',
                    images: [kleczkow01, kleczkow02, kleczkow03, kleczkow04, kleczkow05, kleczkow06]
                },
                {
                    name: 'Budynek biurowy Volvo',
                    url: 'volvo-wroclaw',
                    type: 'commercial',
                    projectYear: '2007',
                    constructionYear: '2008',
                    location: 'Wrocław, ul. Włodarska',
                    description: `Projekt wielobranżowy przebudowy i rozbudowy budynku mieszkalnego wielo-lokalowego datowanego na początek XX w. rok ok. 1905 adaptowanego na budynek biurowy. Przedmiotowa inwestycja znajduje się przy ul. Włodarskiej 5. W zakres zamierzenia budowlanego wchodzi przebudowa istniejącego budynku wraz z dobudową nowej części oraz nadbudową piętra ponad istniejący dach a także towarzyszącą mu infrastrukturą drogową. Miejsca postojowe, wydzielone miejsce na odpady w postaci małej architektury zlokalizowanej na terenie działek przeznaczonych pod inwestycję.W części dobudowywanej budynku zastosowano jedno z pierwszych rozwiązań elewacji w postaci kostki granitowej - tzw „gabionów”. Na obszarze objętych planem zagospodarowania terenu została zaprojektowana również infrastruktura oświetleniowa.`,
                    alt: 'Budynek biurowy Volvo',
                    images: [volvo01, volvo02, volvo03, volvo04]
                },
                {
                    name: 'Justin Center Wrocław',
                    url: 'justin-center',
                    type: 'commercial',
                    projectYear: '2006',
                    constructionYear: '2006 - 2009',
                    location: 'Wrocław, Krawiecka',
                    description: `Obiekt wielofunkcyjny hotelowo-usługowo-mieszkaniowy, składający się z dwóch budynków: budynku hotelowego, czterogwiazdkowego z garażem podziemnym
                    oraz budynku mieszkalno-apartamentowego z zespołem apartamentów mieszkalnych, częścią handlowo-usługową i garażem podziemnym dla użytkowników.
                    Budynki te pełnią funkcje wzajemnie uzupełniające.
                    Hotel przeznaczony jest do krótkotrwałego wynajmu pokoi i apartamentów z pełną obsługą hotelową. Hotel świadczy usługi w zakresie podstawowym oraz w zakresie organizacji konferencji, szkoleń itp. Budynek mieszkalno-apartamentowy składa się z apartamentów mieszkalnych o wysokim standardzie, które przeznaczone są do wynajmu na dłuższy okres czasu dla osób mieszkających czasowo we Wrocławiu z możliwością korzystania z usług hotelowych jak sprzątanie, pranie, dostarczanie posiłków itp. Parter budynku apartamentowego przeznaczono na ogólnodostępne lokale handlowo usługowe o charakterze drobno-przemysłowym, których szczegółowa funkcja określona będzie w okresie późniejszym, oraz restaurację. Nie przewiduje się lokalizacji handlu spożywczego. Restauracja jest dostępna z zewnątrz obiektu oraz z holu hotelu i przeznaczona jest także dla gości z poza obiektu.`,
                    alt: 'Krawiecka JustIn Center Wrocław',
                    images: [krawiecka01, krawiecka02, krawiecka03, krawiecka04, krawiecka05, krawiecka06]
                },
                {
                    name: 'test',
                    type: 'housing',
                    projectYear: '2020',
                    constructionYear: '2021',
                    location: 'Wrocław',
                    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti provident hic deserunt itaque dignissimos amet esse beatae, obcaecati earum!`,
                    alt: 'test',
                    images: [],
                    testImg: projectImg05,
                },
            ]
        },
        {
            section: 'o pracowni',
            url: '/about'
        },
        {
            section: 'skontaktuj się',
            url: '/contact'
        }
    ]

export default data