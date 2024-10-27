import scooter from '../../assets/scooter.jpg'


function About() {
  return (
    <div className="max-w-3xl px-12 pt-8 mx-auto text-xl relative">
      <h3 className="text-center text-2xl font-medium pb-2">Üdvözöllek az oldalamon!</h3>
      <section className="text-justify">
      <p className="mb-4">
        Ha már eddig eljutottál akkor  jó helyen jársz, amennyiben a motorodat szeretnéd javíttatni, szervizeltetni.
        Jómagam is aktívan motorozok, és tudom hogy mennyire bosszantó, ha a technika nem úgy működik, ahogy szeretném.
      </p>
      <p className="mb-4">
        Ha gond van a motoroddal akkor keress meg valamelyik elérhetőségemen, majd
        hozd be a műhelybe és megpróbálom orvosolni a hibát.
      </p>
      <p className="mb-4">
        Egyedül dolgozom, és pont ezért a <span className="italic underline">munkámért felelösséget vállalok</span>.
        Nálam nincs dömpingszerelés, cserébe igyekszem pontos, precíz munkát végezni.
        Behozod a motort előzetes egyeztetés alapján, elmondod hogy mi a gondod vele, én felmérem, majd írok egy munkalapot amin a várható költségek is szerepelnek, így nem ér meglepetés a számla elkészülte után.
      </p>
      <p className="mb-4">
        A munkafolyamatokról igény szerint fotó vagy videó dokumentáció készül.
        Ittléte alatt a motorod fedett helyen van.
        Köszönöm hogy megtiszelsz a bizalmaddal.
      </p>
      </section>
      <div className='flex flex-col items-center'>
        <p className=''>
          *** Robogót jelenleg nem vállalok!
        </p>
        <img src={scooter} alt="" className='w-36' />
      </div>
    </div>
  )
}

export default About
