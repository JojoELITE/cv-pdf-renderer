import Image from 'next/image'
import Head from 'next/head'

const Cv = () => {
  return (
    <>
      <Head>
        <title>CV - Sophie Montigier</title>
      </Head>
      <div className="p- bg-gray-100">
        <div className="bg-blue-600 text-white p-4 flex items-center gap-6">
          <div className=" bg-gray-200 px-6">
            <h1 className="text-xl text-blue-500 font-bold">CONTACT</h1>
            <hr className=" border-gray-500 w-[100%]" />
            <div className="flex flex-col  space-y-2 text-gray-700">
              <div className="flex items-center ">
                <Image src="/assets/2.png" alt="Phone" width={20} height={20} />
                <p className="ml-2">+241 00000000</p>
              </div>
              <div className="flex items-center">
                <Image src="/assets/mail.png" alt="Email" width={20} height={20} />
                <p className="ml-2">mail@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Image src="/assets/home.png" alt="Address" width={20} height={20} />
                <div className="ml-2">
                  <p>12 rue de la reussite</p>
                  <p>75012 Paris</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 border-2 border-white p-4">
            <h2 className="text-lg font-extrabold text-center">SOPHIE MONTIGIER</h2>
            <p className="mt-2 font-bold text-center text-sm">HÔTESSE DE CAISSE POLYVALENTE, +8 ANS D'EXPERIENCE</p>
            <div className="flex space-x-3 mt-4">
              <div className="flex items-center">
                <Image src="/assets/face.png" alt="Social Media" width={10} height={24} />
                <p className="text-sm ml-1">@_Mon_Nom</p>
              </div>
              <div className="flex items-center">
                <Image src="/assets/twi.png" alt="Twitter" width={15} height={24} />
                <p className="text-sm ml-1">@_Mon_Nom</p>
              </div>
              <div className="flex items-center">
                <Image src="/assets/link.png" alt="LinkedIn" width={15} height={24} />
                <p className="text-sm ml-1">@_Mon_Nom</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-">
          <div className="w-1/3 bg-gray-200 p-6">
            <h2 className="text-lg font-bold text-blue-500">A PROPOS DE MOI</h2>
            <hr className="my-2 border-gray-400" />
            <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h2 className="mt-8 text-lg font-bold text-blue-500">COMPETENCES CLES</h2>
            <hr className="my-2 border-gray-400" />
            <div className="space-y-4">
              <div className="flex items-center">
                <p className="w-1/2">Argumentation commerciale</p>
                <div className="flex-1 border  border-blue-600">
                  <div className="bg-blue-600 h-1" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="w-1/2">Logiciel de gestion de stock</p>
                <div className="flex-1 border border-blue-600">
                  <div className="bg-blue-600 h-1" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="w-1/2">Logiciel de gestion de billetterie</p>
                <div className="flex-1 border border-blue-600">
                  <div className="bg-blue-600 h-1" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="flex items-center">
                <p className="w-1/2">Service de carburant à la pompe</p>
                <div className="flex-1 border border-blue-600">
                  <div className="bg-blue-600 h-1" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            <h2 className="mt-8 text-lg font-bold text-blue-500">OUTILS</h2>
            <hr className="my-2 border-gray-400" />
            <div className="space-y-2">
              <div className="flex items-center">
                <Image src="/assets/5.png" alt="Figma" width={16} height={16} />
                <p className="ml-2">Figma</p>
              </div>
              <div className="flex items-center">
                <Image src="/assets/5.png" alt="Vs Code" width={16} height={16} />
                <p className="ml-2">Vs Code</p>
              </div>
              <div className="flex items-center">
                <Image src="/assets/5.png" alt="Adobe" width={16} height={16} />
                <p className="ml-2">Adobe</p>
              </div>
            </div>
            <h2 className="mt-8 text-lg font-bold text-blue-500">HOBBIES</h2>
            <hr className="my-2 border-gray-400" />
            <div className="space-y-2">
              <div className="flex items-center">
                <Image src="/assets/5.png" alt="Singing" width={16} height={16} />
                <p className="ml-2">Chanter</p>
              </div>
              <div className="flex items-center">
                <Image src="/assets/5.png" alt="Dancing" width={16} height={16} />
                <p className="ml-2">Danser</p>
              </div>
              <div className="flex items-center">
                <Image src="/assets/5.png" alt="Coding" width={16} height={16} />
                <p className="ml-2">Coder</p>
              </div>
            </div>
            <h2 className="mt-8 text-lg font-bold text-blue-500">REFERENCE</h2>
            <hr className="my-2 border-gray-400" />
            <div className="space-y-2">
              <div>
                <p className="font-bold">MICKAEL CHRISTOPHER</p>
                <p>Creative Manager</p>
                <p>international Agency, NY</p>
              </div>
              <div className='flex'>
                <p className="font-bold">P:</p>
                <p>+241 00000000</p>
              </div>
              <div className='flex'>
                <p className="font-bold">E:</p>
                <p>mickaelchristopher.com</p>
              </div>
            </div>
          </div>

          <div className="w-2/3 bg-gray-200 p-6">
            <h2 className="text-lg font-bold text-blue-500">PARCOURS PROFESSIONNEL</h2>
            <hr className="my-2 border-gray-400" />
            <div className="space-y-6">
              <div>
                <div className='flex justify-between items-center'>
                  <h3 className="text-md font-bold">Hôtesse de Caisse - Carrefour</h3>
                  <p className="text-sm text-gray-700">Mars 2015 - Octobre 2018</p>

                </div>

                <div className='flex justify-betweeen'>
                  <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>

                  <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>
                </div>


              </div>
              <div>
                <div className='flex justify-between items-center'>
                  <h3 className="text-md font-bold">Hôtesse de Caisse - Carrefour</h3>
                  <p className="text-sm text-gray-700">Mars 2015 - Octobre 2018</p>

                </div>
                <div className='flex justify-betweeen'>
                  <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>

                  <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className='flex justify-between items-center'>
                  <h3 className="text-md font-bold">Hôtesse de Caisse - Carrefour</h3>
                  <p className="text-sm text-gray-700">Mars 2015 - Octobre 2018</p>

                </div>
                <div className='flex justify-betweeen'>
                  <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>

                  <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className='flex justify-between items-center'>
                  <h3 className="text-md font-bold">Hôtesse de Caisse - Carrefour</h3>
                  <p className="text-sm text-gray-700">Mars 2015 - Octobre 2018</p>

                </div>
                <div className='flex justify-betweeen'>
                  <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>

                  <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                    <li>Gestion des transactions de caisse</li>
                    <li>Service client et gestion des réclamations</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-lg font-bold text-blue-500">FORMATION</h2>
            <hr className="my-2 border-gray-400" />
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-bold">Baccalauréat Professionnel</h3>
                <div className='flex justify-between'>
                  <p className="text-sm text-gray-700">Institut de Formation Professionnelle</p>
                  <p className="text-sm text-gray-700">2018</p>
                </div>

                <p className='mt-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique soluta delectus.</p>

              </div>
              <div>
                <h3 className="text-md font-bold">Certificat de Formation Continue en Gestion de Caisse</h3>

                <div className='flex justify-between'>
                  <p className="text-sm text-gray-700">Institut de Formation Professionnelle</p>
                  <p className="text-sm text-gray-700">2018</p>
                </div>

                <p className='mt-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique soluta delectus.</p>


              </div>

              <div>
                <h3 className="text-md font-bold">Certificat de Formation Continue en Gestion de Caisse</h3>

                <div className='flex justify-between'>
                  <p className="text-sm text-gray-700">Institut de Formation Professionnelle</p>
                  <p className="text-sm text-gray-700">2018</p>
                </div>

                <p className='mt-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique soluta delectus.</p>


              </div>

              <div>
                <h3 className="text-md font-bold">Certificat de Formation Continue en Gestion de Caisse</h3>

                <div className='flex justify-between'>
                  <p className="text-sm text-gray-700">Institut de Formation Professionnelle</p>
                  <p className="text-sm text-gray-700">2018</p>
                </div>

                <p className='mt-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique soluta delectus.</p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cv
