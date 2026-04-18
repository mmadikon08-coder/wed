import Image from "next/image"

export function LocationSection() {
  // 2GIS link placeholder - user should replace with actual location link
  const twoGisLink = "https://2gis.kz/atyrau/search/infinity%20event%20hall"

  return (
    <section className="py-12 px-4">
      <div className="max-w-sm mx-auto text-center">
        {/* Title */}
        <h3 
          className="text-3xl text-primary mb-6"
          style={{ fontFamily: 'var(--font-balmoral)' }}
        >
          Мекен жайымыз:
        </h3>

        {/* Address */}
        <p className="text-lg font-semibold text-foreground tracking-wide leading-relaxed mb-6">
          АТЫРАУ ҚАЛАСЫ,
          <br />
          ҚҰРМАНҒАЗЫ КӨШЕСІ, 12
          <br />
          {'"INFINITY EVENT HALL"'}
          <br />
          БАНКЕТ ЗАЛЫ
        </p>

        {/* 2GIS instruction */}
        <p className="text-base text-foreground mb-4">
          ЖЕТУГЕ ЫҢҒАЙЛЫ БОЛУ
          <br />
          ҮШІН ТӨМЕНДЕГІ 2ГИС
          <br />
          СІЛТЕМЕСІН ҚОЛДАНЫҢЫЗ:
        </p>

        {/* 2GIS button */}
        <a
          href={twoGisLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105"
        >
          <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/2gis-icon.png"
              alt="2GIS"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
