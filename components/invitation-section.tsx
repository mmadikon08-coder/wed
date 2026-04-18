import { OrnamentCorner } from "./ornament-corner"

export function InvitationSection() {
  return (
    <section className="relative py-16 px-4">
      {/* Decorative corners */}
      <OrnamentCorner position="top-left" />
      <OrnamentCorner position="top-right" />
      <OrnamentCorner position="bottom-left" />
      <OrnamentCorner position="bottom-right" />

      <div className="max-w-lg mx-auto text-center">
        {/* Greeting */}
        <p className="text-lg md:text-xl font-semibold tracking-wide text-foreground leading-relaxed mb-8">
          ҚҰРМЕТТІ АҒАЙЫН-ТУЫС,
          <br />
          БАУЫРЛАР, ҚҰДА-ЖЕКЖАТ,
          <br />
          НАҒАШЫ-ЖИЕН, БӨЛЕЛЕР,
          <br />
          ӘРІПТЕСТЕР,
          <br />
          ДОС-ЖАРАНДАР,
          <br />
          КӨРШІЛЕР!
        </p>

        {/* Divider */}
        <div className="divider-ornament w-3/4 mx-auto mb-8" />

        {/* Invitation text */}
        <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
          СІЗ(ДЕР)ДІ
          <br />
          АЯУЛЫ ҚЫЗЫМЫЗ
        </p>

        <p 
          className="text-4xl md:text-5xl text-primary my-4"
          style={{ fontFamily: 'var(--font-balmoral)' }}
        >
          Асемгүлдің
        </p>

        <p className="text-base md:text-lg font-medium text-foreground leading-relaxed tracking-wide">
          ҚЫЗ ҰЗАТУ ТОЙЫНА АРНАЛҒАН
          <br />
          САЛТАНАТТЫ АҚ
          <br />
          ДАСТАРХАНЫМЫЗДЫҢ
          <br />
          ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА
          <br />
          ШАҚЫРАМЫЗ!
        </p>
      </div>
    </section>
  )
}
