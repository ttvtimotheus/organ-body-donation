import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Impressum | Organ- und Körperspende Informationsportal',
  description: 'Impressum und rechtliche Informationen zum Organ- und Körperspende Informationsportal',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Startseite
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Impressum</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Timo Haseloff</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Breite Straße 7</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">39288 Burg</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Sachsen-Anhalt</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Deutschland</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Kontakt</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">E-Mail: info@koerperundorgan.de</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Timo Haseloff</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Breite Straße 7</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">39288 Burg</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Sachsen-Anhalt</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Deutschland</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Haftungsausschluss</h2>
          
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Haftung für Inhalte</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Haftung für Links</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Urheberrecht</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Datenschutz</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
        </section>
      </div>
    </div>
  );
}
