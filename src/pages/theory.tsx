import { GlobeIcon, ScalesIcon } from "@phosphor-icons/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  dimensiProfesionalisme,
  komitmenIEEE,
  laranganUUITE,
  prinsipIPTEK,
} from "@/constants/theory";
import { cn } from "@/lib/utils";

export const Theory = () => {
  return (
    <div className="mx-auto max-w-[90%] pt-28 pb-10">
      <div className="mb-10 flex flex-col items-center space-y-4 text-pretty text-center">
        <h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
          Kajian Etika Profesi & Landasan Teori
        </h1>
        <p className="text-pretty text-foreground/70 text-sm lg:text-base">
          Konsep multidimensional standar perilaku, kompetensi, dan akuntabilitas praktisi IT.
        </p>
      </div>

      <div className="space-y-4">
        <section className="flex flex-col justify-between gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <article className="space-y-4 text-foreground/70 text-sm leading-relaxed">
            <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
              Definisi Profesionalisme IT
            </h2>
            <p>
              Profesionalisme IT adalah keselarasan antara keahlian teknis dengan integritas moral,
              akuntabilitas, dan tanggung jawab sosial dalam bekerja. Di era digital, seorang
              praktisi tidak hanya dituntut andal secara teknis, melainkan juga wajib mengantisipasi
              dampak etis dan perlindungan data dari setiap teknologi yang dikembangkannya. Untuk
              mewujudkan standar kerja tersebut, terdapat empat dimensi utama yang menjadi pilar
              dasar bagi setiap profesional:
            </p>
          </article>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {dimensiProfesionalisme.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-2 rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition hover:bg-foreground/10"
              >
                <Icon size={20} className="text-foreground/40" />
                <div className="text-foreground/50 text-xs">{title}</div>
                <div className="font-semibold text-foreground text-sm leading-snug">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <Tabs defaultValue="iptek">
          <TabsList className="w-full">
            <TabsTrigger value="iptek" className="flex-1">
              Kode Etik IPTEK
            </TabsTrigger>
            <TabsTrigger value="ieee" className="flex-1">
              Kode Etik IEEE
            </TabsTrigger>
          </TabsList>
          <TabsContent value="iptek">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-foreground/5 bg-foreground/5">
                  <GlobeIcon size={20} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Ikatan Profesi Teknologi Informatika Indonesia menetapkan kerangka kode etik
                    sebagai panduan moral utama bagi seluruh profesional IT di Indonesia yang
                    memadukan prinsip universal dengan konteks hukum dan budaya nasional.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {prinsipIPTEK.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition hover:bg-foreground/10"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-foreground/60" />
                      <p className="font-medium text-foreground text-sm">{title}</p>
                    </div>
                    <p className="text-foreground/70 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ieee">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-foreground/5 bg-foreground/5">
                  <GlobeIcon size={20} className="text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Institute of Electrical and Electronics Engineers merupakan organisasi profesi
                    internasional yang diakui global dan dijadikan referensi krusial oleh organisasi
                    nasional seperti IPTEK.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {komitmenIEEE.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-start gap-3 rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition hover:bg-foreground/10"
                  >
                    <span className="mt-0.5 shrink-0 font-mono font-semibold text-foreground/50 text-xs">
                      {item.number}
                    </span>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.title}</p>
                      <p className="text-foreground/70 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <section className="flex flex-col gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-foreground/5 bg-foreground/5">
              <ScalesIcon size={20} className="text-foreground" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-foreground text-lg tracking-tight">
                Landasan Hukum: UU ITE
              </h2>
              <p className="text-foreground/70 text-sm leading-relaxed">
                UU No. 11 Tahun 2008 jo UU No. 19 Tahun 2016 tentang Informasi dan Transaksi
                Elektronik merupakan regulasi hukum pertama di Indonesia yang memberikan kepastian
                hukum di cyberspace. Dari kacamata etika profesi IT, UU ITE bertindak sebagai rambu
                hukum normatif yang mendefinisikan batasan perilaku digital yang legal.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {laranganUUITE.map((item) => (
              <div
                key={item.label}
                className={cn("flex flex-col gap-3 rounded-xl border p-4", item.color)}
              >
                <span
                  className={cn(
                    "self-start rounded-lg px-3 py-1 font-semibold text-xs",
                    item.badge,
                  )}
                >
                  {item.label}
                </span>
                <p className="text-foreground/70 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
