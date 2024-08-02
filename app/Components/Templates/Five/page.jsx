// components/Resume.js
import Image from 'next/image';

const Resume = () => (
  <>
    <div className='flex justify-between p-10'>
      <div className="mb-6">
        <h2 className="text-xl font-bold">CHEF DE PROJET</h2>
        <h1 className="text-4xl font-black">GUSTAVE <br /><span>ROUSSEAU</span></h1>
      </div>
      <div className="mb-6">
        <Image src="/assets/1.png" alt="Profile" width={100} height={100} className="rounded-full" />
      </div>
    </div>

    <hr className="my-2 border-gray-800 w-[92%] ml-10" />

    <div className="flex flex-row bg-gray-50">

      {/* Left Column */}

      <div className="w-1/3 px-10">



        <div>
          <h3 className="text-lg font-bold">CONTACT</h3>
          <div className="flex items-center mt-2">
            <Image src="/assets/mail1.png" alt="Email" width={12} height={10} />
            <p className="ml-2 text-sm text-gray-600">mail@gmail.com</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/home1.png" alt="Address" width={12} height={10} />
            <div className="ml-2 text-sm text-gray-600">
              <p>12 rue de la reussite</p>
              <p>75012 Paris</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/phone.png" alt="Phone" width={12} height={10} />
            <p className="ml-2 text-sm text-gray-600">+241 00000000</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/calendar.png" alt="Date of Birth" width={12} height={10} />
            <p className="ml-2 text-sm text-gray-600">23 juin 1985</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/world.png" alt="Nationality" width={12} height={10} />
            <p className="ml-2 text-sm text-gray-600">Française</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/link1.png" alt="LinkedIn" width={12} height={10} />
            <p className="ml-2 text-sm text-gray-600">linkedin.com/theophilehamon</p>
          </div>
        </div>
        <hr className="my-6 border-gray-800" />
        <div>
          <h3 className="text-lg font-bold">COMPÉTENCES</h3>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Skill" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Compétences en organisation</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Skill" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Gestion du temps</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Skill" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Adaptabilité</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Skill" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Leadership</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Skill" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Microsoft Excel</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Skill" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Souci du détail</p>
          </div>
        </div>
        <hr className="my-6 border-gray-800" />
        <div>
          <h3 className="text-lg font-bold">LANGUES</h3>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Language" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Français | Natif</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Language" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Anglais | Compétence professionnelle complète</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Language" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Espagnol | Notions élémentaires</p>
          </div>
        </div>
      </div>

      <div className="border-r-2 border-gray-500 mr-10"></div>


      {/* Right Column */}
      <div className="w-2/3 ">
        <div className="mb-6">
          <h3 className="text-lg font-bold">OBJECTIF</h3>
          <p className="mt-2 text-sm text-gray-600">Un comptable agréé avec plus de 6 ans d’expérience. S'adapte sans heurts aux processus comptables en constante évolution et aux nouvelles technologies. Soucieux des détails, efficace et organisé, avec une vaste expérience des systèmes comptables.</p>
        </div>
        <hr className="my-6 border-gray-800 w-[98%]" />
        <div>
          <h3 className="text-lg font-bold">EXPÉRIENCES</h3>
          <div className="mb-4">
            <h4 className="font-bold">SPÉCIALISTE DES COMMUNICATIONS</h4>
            <p className="text-sm font-bold">Agence AdVibes</p>
            <p className="text-sm text-gray-600">Paris | Juil 2008 - Juin 2009</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Task" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Task" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Superviser l’équipe comptable et fournir une orientation et une direction au besoin.</p>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">SPÉCIALISTE DES COMMUNICATIONS</h4>
            <p className="text-sm font-bold">Agence AdVibes</p>
            <p className="text-sm text-gray-600">Paris | Juil 2008 - Juin 2009</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Task" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">J’ai préparé des rapports financiers et des rapports mensuels / trimestriels pour examen par le comptable senior et la direction supérieure. J’ai veillé à la précision et à la livraison à temps de tous les rapports.</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Task" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Gérer les relations avec les auditeurs externes, les professionnels fiscaux et autres fournisseurs de services financiers.</p>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">SPÉCIALISTE DES COMMUNICATIONS</h4>
            <p className="text-sm font-bold">Agence AdVibes</p>
            <p className="text-sm text-gray-600">Paris | Juil 2008 - Juin 2009</p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/assets/5.png" alt="Task" width={10} height={10} />
            <p className="ml-2 text-sm text-gray-600">Vérifier les rapports et les enregistrements financiers pour détecter les erreurs et les incohérences.</p>
          </div>
        </div>
        <hr className="my-6 border-gray-800" />
        <div>
          <h3 className="text-lg font-bold">FORMATIONS</h3>
          <div className="mb-4">
            <h4 className="font-bold">Comptabilité de Gestion</h4>
            <p className="text-sm font-bold">Université Sorbonne</p>
            <p className="text-sm text-gray-600">Paris | Juil 2008 - Juin 2009</p>
            <div className="flex items-center mt-4">
              <Image src="/assets/5.png" alt="Task" width={10} height={10} />
              <p className="ml-2 text-sm text-gray-600">Vérifier les rapports et les enregistrements financiers pour détecter les erreurs et les incohérences.</p>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Certificat de Comptabilité</h4>
            <p className="text-sm font-bold">Institut de Comptabilité de Paris</p>
            <p className="text-sm text-gray-600">Paris | Jan 2005 - Déc 2007</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Diplôme en Administration des Affaires</h4>
            <p className="text-sm font-bold">École Supérieure de Commerce</p>
            <p className="text-sm text-gray-600">Paris | Sept 2002 - Juin 2005</p>
          </div>
        </div>
      </div>
    </div>
  </>


);

export default Resume;
