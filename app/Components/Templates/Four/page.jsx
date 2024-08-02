import Image from 'next/image';

const Cv = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-blue-600 w-12 "></div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex">
          {/* Left Column */}
          <div className="w-1/3 pr-5">
            <Image src="/assets/1.png" alt="Profile" width={120} height={100} className="mb-8 " />

            {/* Contact Information */}
            <h2 className="text-xl font-bold text-blue-600 mt-[44px] border-b-4 border-blue-500 w-24">CONTACT</h2>
            <div className="mt-3">
              <div className="flex items-center ">
                <Image src="/assets/mail1.png" alt="Email" width={16} height={16} className="mr-2" />
                <p className="text-gray-700">mail@gmail.com</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/home1.png" alt="Address" width={16} height={16} className="mr-2" />
                <p className="text-gray-700">12 rue de la réussite, 75012 Paris</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/phone.png" alt="Phone" width={16} height={16} className="mr-2" />
                <p className="text-gray-700">+241 00000000</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/calendar.png" alt="Birthday" width={16} height={16} className="mr-2" />
                <p className="text-gray-700">23 juin 1985</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/world.png" alt="Nationality" width={16} height={16} className="mr-2" />
                <p className="text-gray-700">Française</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/link1.png" alt="LinkedIn" width={16} height={16} className="mr-2" />
                <p className="text-gray-700">linkedin.com/ <br /> theophilehamon</p>
              </div>
            </div>

            {/* Skills */}
            <h2 className="text-xl font-bold text-blue-600 mt-3 border-b-4 border-blue-500 w-[72%]">COMPÉTENCES</h2>
            <div className="mt-3">
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Skill" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Compétences en organisation</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Skill" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Gestion du temps</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Skill" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Adaptabilité</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Skill" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Leadership</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Skill" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Microsoft Excel</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Skill" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Souci du détail</p>
              </div>
            </div>

            {/* Languages */}
            <h2 className="text-xl font-bold text-blue-600 mt-3 border-b-4 border-blue-500 w-24">LANGUES</h2>
            <div className="mt-3">
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Language" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Français | Natif</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Language" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Anglais | Compétence professionnelle complète</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/assets/5.png" alt="Language" width={8} height={8} className="mr-2" />
                <p className="text-gray-700">Espagnol | Notions élémentaires</p>
              </div>
            </div>
          </div>

          <div class="border-r-2 border-gray-500"></div>

          {/* Right Column */}
          <div className="w-2/3 px-6">
          <h2 className="text-xl font-bold  ">Directeur Comptable</h2>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">Théophile <br />Hamon</h1>

            {/* Objective */}
            <h2 className="text-xl font-bold text-blue-600 mt-20 border-b-4 border-blue-500 w-24">OBJECTIF</h2>
            <p className="text-gray-700 mt-3">
              Un comptable agréé avec plus de 6 ans d’expérience. S'adapte sans heurts aux processus comptables en constante évolution et aux nouvelles technologies. Soucieux des détails, efficace et organisé, avec une vaste expérience des systèmes comptables.
            </p>

            {/* Experience */}
            <h2 className="text-xl font-bold text-blue-600 mt-3 border-b-4 border-blue-500 w-[33%]">EXPÉRIENCES</h2>
            <div className="">
              <div className="mt-3">
                <div className='flex justify-between'>                
                  <h3 className="font-semibold">Directeur Comptable</h3>
                  <p className="text-gray-700">Févr 2018 - Présent</p>
                </div>
                <p className="text-gray-700">Apex Corporation, Paris, FR.</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  <li>J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.</li>
                  <li>Superviser l’équipe comptable et fournir une orientation et une direction au besoin.</li>
                </ul>
              </div>


              <div className="mt-3">
                <div className='flex justify-between'>                
                  <h3 className="font-semibold">Directeur Comptable</h3>
                  <p className="text-gray-700">Févr 2018 - Présent</p>
                </div>
                <p className="text-gray-700">Apex Corporation, Paris, FR.</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  <li>J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.</li>
                  <li>Superviser l’équipe comptable et fournir une orientation et une direction au besoin.</li>
                </ul>
              </div>


              <div className="mt-3">
                <div className='flex justify-between'>                
                  <h3 className="font-semibold">Directeur Comptable</h3>
                  <p className="text-gray-700">Févr 2018 - Présent</p>
                </div>
                <p className="text-gray-700">Apex Corporation, Paris, FR.</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  <li>J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.</li>
                  <li>Superviser l’équipe comptable et fournir une orientation et une direction au besoin.</li>
                </ul>
              </div>

              {/* Add more experiences here following the same structure */}
            </div>

            {/* Education */}
            <h2 className="text-xl font-bold text-blue-600 mt-3 border-b-4 border-blue-500 w-32">FORMATIONS</h2>
            <div className="">
              <div className="mt-3">
                <h3 className="font-semibold">Comptabilité de Gestion</h3>
                <p className="text-gray-700">Université Sorbonne</p>
                <p className="text-gray-700">Paris | Juil 2008 - Juin 2009</p>
                <p className="text-gray-700">Principes et concepts avancés de comptabilité financière.</p>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold">Comptabilité de Gestion</h3>
                <p className="text-gray-700">Université Sorbonne</p>
                <p className="text-gray-700">Paris | Juil 2008 - Juin 2009</p>
                <p className="text-gray-700">Principes et concepts avancés de comptabilité financière.</p>
              </div>


              <div className="mt-3">
                <h3 className="font-semibold">Comptabilité de Gestion</h3>
                <p className="text-gray-700">Université Sorbonne</p>
                <p className="text-gray-700">Paris | Juil 2008 - Juin 2009</p>
                <p className="text-gray-700">Principes et concepts avancés de comptabilité financière.</p>
              </div>

              {/* Add more education details here following the same structure */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
