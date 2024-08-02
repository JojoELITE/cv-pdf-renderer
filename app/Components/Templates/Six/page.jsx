import React from 'react';
import Image from 'next/image';


const Pdf = () => (
  <div className="p-5">
    <div className="bg-gray-800 w-11.5/12 h-8 ml-5"></div>

    <div className="flex justify-between py-5">
      <div className='ml-5'>
        <h1 className="text-lg font-black">WILLIAM DEBLOIS</h1>
        <p className="text-sm text-gray-600">CHEF DE PROJET</p>
      </div>

      <div className="text-sm text-gray-600">
        <p className="pl-2">webelois@gmail.com</p>
        <p className="pl-6">25 rue des Fleurs,</p>
        <p className="">33500 Libourne, France</p>
        <p className="pl-14">212 635 3364</p>
        <p className="pl-1">09/07/1984 – Français</p>
      </div>
    </div>

    <div className="flex">
      <div className="w-1/3 pl-2">
        <Image src="/assets/00.jpeg" alt="Profile Image" width={140} height={150} className="ml-2 mt-2" />

        <div>
          <div className="h-px w-4/5 bg-black ml-3 mt-5"></div>

          <div className="flex items-center mt-2">
            <Image src="/assets/icon.png" alt="Icon" width={12} height={10} className="mt-1 ml-2" />
            <h2 className="text-sm font-bold pl-2">OBJECTIF</h2>
          </div>

          <div className="h-px w-4/5 bg-black ml-3 mt-2"></div>

          <p className="text-sm w-[92%] pl-3 pt-2 text-gray-600">
            Professionnel dynamique et à l'écoute des clients, fort de plus de 4 ans d'expérience dans des magasins
            réputés. Expérience en formation et mentorat de membres de l'équipe. Créer, réviser et corriger des
            communications d'entreprise et marketing. Prise en charge de la communication.
          </p>
        </div>

        <div>
          <div className="h-px w-4/5 bg-black ml-3 mt-5"></div>

          <div className="flex items-center mt-2">
            <Image src="/assets/icon.png" alt="Icon" width={12} height={10} className="mt-1 ml-2" />
            <h2 className="text-sm font-bold pl-2">COMPÉTENCES</h2>
          </div>

          <div className="h-px w-4/5 bg-black ml-3 mt-2"></div>

          <ul className="pl-3 pt-2 text-sm text-gray-600">
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Gestion de projet</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Microsoft Office</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Présentations</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Langues</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Compétences communicatives</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Stratégies commerciales</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="h-px w-4/5 bg-black ml-3 mt-5"></div>

          <div className="flex items-center mt-2">
            <Image src="/assets/icon.png" alt="Icon" width={12} height={10} className="mt-1 ml-2" />
            <h2 className="text-sm font-bold pl-2">LANGUES</h2>
          </div>

          <div className="h-px w-4/5 bg-black ml-3 mt-2"></div>

          <ul className="pl-3 pt-2 text-sm text-gray-600">
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Français | Natif</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Anglais | Compétence professionnelle complète</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Italien – Compétence professionnelle limitée</span>
            </li>
            <li className="flex items-center">
              <Image src="/assets/5.png" alt="Bullet" width={3} height={3} className="mt-1" />
              <span className="pl-2">Polonais – Notions élémentaires</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-2/3 h-full">
        <div className="h-px w-full bg-black mt-2"></div>

        <div className="mt-2">
          <div className="flex items-center">
            <Image src="/assets/icon.png" alt="Icon" width={12} height={10} className="mt-1" />
            <h2 className="text-sm font-bold pl-2">EXPÉRIENCES</h2>
          </div>
          <div className="h-px w-full bg-black mt-1"></div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Spécialiste des communications</h3>
              <span className="text-sm text-gray-600">Juin 2013 – Mars 2017</span>
            </div>
            <p className="text-sm text-black mt-1">Agence de marketing AdVibes | Paris</p>
            <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
              <li>
                J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures
                pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Comptable en Personnel</h3>
              <span className="text-sm text-gray-600">Janv 2013 - Févr 2018</span>
            </div>
            <p className="text-sm text-black mt-1">Apex Corporation, Paris, FR.</p>
            <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
              <li>
                J’ai préparé des rapports financiers et des rapports mensuels / trimestriels pour examen par le
                comptable senior et la direction supérieure. J’ai veillé à la précision et à la livraison à temps de
                tous les rapports.
              </li>
              <li>
                Gérer les relations avec les auditeurs externes, les professionnels fiscaux et autres fournisseurs de
                services financiers.
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Comptable</h3>
              <span className="text-sm text-gray-600">Févr 2012 - Janv 2013</span>
            </div>
            <p className="text-sm text-black mt-1">Veritec, Lille, FR</p>
            <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
              <li>
                J’ai préparé les déclarations fiscales pour les particuliers et les entreprises, en veillant à la
                conformité avec les lois fiscales locales et nationales. J’ai fourni des conseils fiscaux aux clients et
                ai aidé à la planification fiscale pour minimiser les obligations fiscales.
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Assistant de recherche</h3>
              <span className="text-sm text-gray-600">Nov 2011 - Déc 2012</span>
            </div>
            <p className="text-sm text-black mt-1">INRIA, Bordeaux, FR.</p>
            <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
              <li>
                J’ai participé à des projets de recherche en informatique, en particulier en traitement de données et en
                analyse statistique. J’ai aidé à la collecte et à l’analyse de données, ainsi qu’à la rédaction de
                rapports de recherche.
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Stagiaire comptabilité</h3>
              <span className="text-sm text-gray-600">Juin 2011 - Sept 2011</span>
            </div>
            <p className="text-sm text-black mt-1">E&Y, Paris, FR</p>
            <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
              <li>
                J’ai assisté les comptables seniors dans diverses tâches comptables, y compris la préparation des
                écritures de journal, la conciliation bancaire et l’analyse des comptes.
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-black mt-2"></div>


        <div className="mt-2">
          <div className="flex items-center">
            <Image src="/assets/icon.png" alt="Icon" width={12} height={10} className="mt-1" />
            <h2 className="text-sm font-bold pl-2">FORMATIONS</h2>
          </div>
          <div className="h-px w-full bg-black mt-1"></div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Spécialiste des communications</h3>
              <span className="text-sm text-gray-600">Juin 2013 – Mars 2017</span>
            </div>
            <p className="text-sm text-black mt-1">Agence de marketing AdVibes | Paris</p>
            <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
              <li>
                J’ai rendu compte et collaboré avec le directeur financier (CFO) pour évaluer et évoluer les meilleures
                pratiques des organisations et mettre en place des stratégies financières et comptables efficaces.
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Comptable en Personnel</h3>
              <span className="text-sm text-gray-600">Janv 2013 - Févr 2018</span>
            </div>
            <p className="text-sm text-black mt-1">Apex Corporation, Paris, FR.</p>
            <ul className="text-sm text-gray-600 mt-1 pl-5 list-disc">
              <li>
                J’ai préparé des rapports financiers et des rapports mensuels / trimestriels pour examen par le
                comptable senior et la direction supérieure. J’ai veillé à la précision et à la livraison à temps de
                tous les rapports.
              </li>
              <li>
                Gérer les relations avec les auditeurs externes, les professionnels fiscaux et autres fournisseurs de
                services financiers.
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Comptable</h3>
              <span className="text-sm text-gray-600">Févr 2012 - Janv 2013</span>
            </div>
            <p className="text-sm text-black mt-1">Veritec, Lille, FR</p>
        
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Assistant de recherche</h3>
              <span className="text-sm text-gray-600">Nov 2011 - Déc 2012</span>
            </div>
            <p className="text-sm text-black mt-1">INRIA, Bordeaux, FR.</p>
        
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-bold">Stagiaire comptabilité</h3>
              <span className="text-sm text-gray-600">Juin 2011 - Sept 2011</span>
            </div>
            <p className="text-sm text-black mt-1">E&Y, Paris, FR</p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pdf;
