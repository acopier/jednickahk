import ContentPage from '@/components/ContentPage';
import { Metadata } from 'next';

const title = 'Historie';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return (
    <ContentPage title={title}>
      <p>
        Historie 1. oddílu se začala psát podle posledních zpráv již v roce 1968
        ve skautském středisku v Kuklenách. Prvním z vůdců oddílu byl br.
        Blažek. Oddíl pod jeho vedením pomáhal s budováním nové skautské
        klubovny v Kuklenách, kde odpracovali členové oddílu desítky
        brigádnických hodin. Klubovna byla slavnostně otevřena v červnu 1969.
      </p>
      <p>
        Hned po otevření klubovny nastali práce na přípravě letního tábora. Díky
        velké zásluze br. J Kryšpína bylo prostřednictvím paní Strnadové získáno
        tábořiště v povodí Želivky mezi obcemi Vřesník a Sedlice. Na tomto místě
        se konal první tábor ŽELIV 1969 aneb Tábor u Kruťasů.
      </p>
      <br />
      <p>
        Na stejném místě se konal i tábor v roce 1970. Vůdci oddílu byli tehdy
        br. Drahorád (Vlasta), br. Andra (Pípa) a br. Naxera (Skukum) a členem
        oddílu byl i současný vůdce střediska Želivák Ondra Rejsek. Po nuceném
        rozpuštění Junáka v roce 1970 skončila i činnost oddílu.
      </p>
      <br />
      <p>
        K obnovení činnosti se dostal po dlouhých 20 letech na jaře v roce 1990.
        Přesněji 25.března. to se konala první oddílová schůzka. Ve vedení
        oddílu tehdy byli Pifík (Josef Potůček), Ondra Rejsek, Pavel Entrich a
        Jirka Balek. A členy oddílu byli Míra Kváča (Béčko), Ondra Rejsek
        (Veverčák) a malý Pifík (Pepa Potůček ml.) a další. Oddíl se scházel na
        pravidelných schůzkách v kuklenské sokolovně. V létě 1991 se účastnil
        střediskového tábora na Želivce. Oddíl se od počátku potýkal s malým
        počtem členů. Ještě o rok později se účastnil střediskového tábora, kde
        se zapojil do táborové hry pořádané 12. oddílem. Po prázdninách většina
        členů odešla na školy a činnost oddílu pomalu skončila.
      </p>
      <br />
      <p>
        Na další obnovení činnosti si oddíl musel počkat dlouhých deset let. To
        se činnost oddílu přesunula z Kuklen do Malšovic. V září 2002 se
        uskutečnil první nábor na malšovických školách a do oddílu začalo chodit
        prvních čtrnáct chlapců. (Prófa, Indián, Kvapník, Vítek, Lékárník,
        Franta a další). Do vedení oddílu nastoupil Vláďa Bátor (Tom) a Vláďa
        Plášil (Siggi). Od té doby se činnost oddílu neustále rozvíjí. Na první
        robinsonádu jsme vyrazili na jaře 2003 do Českých Petrovic. Od té doby
        se konají oddílové robinsonády minimálně dvakrát do roka.
      </p>
      <br />
      <p>
        V současné době má oddíl pět družin. Od školního roku 2018-2019 se k
        barvám jednotlivých družin přidaly i družinová zvířata. Červená družina
        jsou Vydry, Fialová Kamzíci, Modrá Vlci, Žlutá Veverky a Zelená družina
        si vybrala jako svůj družinový znak ledňáčka. Oddíl pořádá během roku
        spoustu akcí. Ať se už jedná o oddílové robinsonády, tradiční hru na
        starém městě, ale i čtrnáctidenní tábor. O své činnosti pravidelně
        informuje v oddílovém časopise „Jednička hlásí“, který vychází
        pravidelně vždy první úterý v měsíci.
      </p>
    </ContentPage>
  );
}
export default Page;
