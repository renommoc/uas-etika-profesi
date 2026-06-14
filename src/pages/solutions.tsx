import { CaretDownIcon, GraduationCapIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fokusHukum, solusiEdukasi, solusiTataKelola } from "@/constants/solutions";

export const Solutions = () => {
  return (
    <div className="mx-auto max-w-[90%] pt-28 pb-10">
      <div className="mb-10 flex flex-col items-center space-y-4 text-pretty text-center">
        <h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
          Solusi & Rekomendasi Etis
        </h1>
        <p className="text-pretty text-foreground/70 text-sm lg:text-base">
          Membangun ekosistem digital yang aman dan berintegritas melalui reformasi edukasi,
          penguatan tata kelola, dan penegakan hukum normatif.
        </p>
      </div>

      <div className="space-y-6">
        <Tabs defaultValue="edukasi">
          <TabsList className="w-full">
            <TabsTrigger value="edukasi" className="flex items-center gap-2">
              <GraduationCapIcon /> Pilar Edukasi
            </TabsTrigger>
            <TabsTrigger value="tata-kelola" className="flex items-center gap-2">
              <ShieldCheckIcon /> Pilar Tata Kelola
            </TabsTrigger>
          </TabsList>
          <TabsContent value="edukasi">
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="flex items-center gap-2 font-bold text-foreground text-xl tracking-tight md:text-2xl">
                  Penguatan Pendidikan Etika Profesi IT
                </h2>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Membentuk karakter praktisi teknologi informasi yang bertanggung jawab melalui
                  integrasi kurikulum etika yang mendalam sejak bangku perkuliahan.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {solusiEdukasi.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 rounded-xl border border-foreground/5 bg-foreground/5 p-4 transition hover:bg-foreground/10"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-foreground/10 text-foreground">
                        <Icon size={18} />
                      </div>
                      <p className="font-semibold text-foreground text-sm tracking-tight">
                        {title}
                      </p>
                    </div>
                    <p className="pl-1 text-foreground/70 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="tata-kelola">
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="flex items-center gap-2 font-bold text-foreground text-xl tracking-tight md:text-2xl">
                  Keamanan Siber & Tata Kelola Data
                </h2>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Mengimplementasikan arsitektur perlindungan informasi yang kokoh guna melindungi
                  hak privasi dan menekan risiko insiden kebocoran data nasional.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {solusiTataKelola.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 rounded-xl border border-foreground/5 bg-foreground/5 p-4 transition hover:bg-foreground/10"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-foreground/10 text-foreground">
                        <Icon size={18} />
                      </div>
                      <p className="font-semibold text-foreground text-sm tracking-tight">
                        {title}
                      </p>
                    </div>
                    <p className="pl-1 text-foreground/70 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>

        <section className="flex flex-col gap-5 rounded-lg border border-foreground/5 bg-foreground/5 p-5 shadow-xl backdrop-blur-sm md:p-7">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
            <article className="space-y-3 lg:col-span-1">
              <h2 className="font-bold text-2xl text-foreground tracking-tight">
                Penegakan Regulasi & Budaya Digital
              </h2>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Kepastian hukum normatif bertindak sebagai pondasi utama bagi penegakan kode etik
                profesi IT, sekaligus memicu efek jera terhadap pelanggaran privasi data.
              </p>
            </article>

            <div className="w-full space-y-3 lg:col-span-2">
              {fokusHukum.map(({ title, desc }, index) => (
                <div
                  key={title}
                  className="flex flex-col gap-1 rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition hover:bg-foreground/10"
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="flex items-center gap-1.5 text-[0.625rem] text-foreground/70 uppercase tracking-wide">
                      {title} <CaretDownIcon />
                    </p>
                    <Badge className="text-[0.625rem]" variant="outline">
                      AKSI 0{index + 1}
                    </Badge>
                  </div>
                  <p className="text-justify text-foreground/70 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
