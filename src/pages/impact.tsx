import {
  BookOpenIcon,
  CaretDownIcon,
  CoinsIcon,
  MinusIcon,
  PlusIcon,
  UsersIcon,
  WarningDiamondIcon,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Impact = () => {
  return (
    <div className="mx-auto max-w-[90%] pt-28 pb-10">
      <div className="mb-10 flex flex-col items-center space-y-4 text-pretty text-center">
        <h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
          Dampak Teknologi Terhadap Masyarakat
        </h1>
        <p className="text-pretty text-foreground/70 text-sm lg:text-base">
          Perkembangan teknologi informasi menawarkan efisiensi besar, namun memicu tantangan etis
          dan ancaman privasi.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="flex flex-col justify-between gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <div className="flex flex-col gap-3">
            <Badge className="mb-4 border-emerald-500/20 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
              <PlusIcon className="mr-1" /> Dampak Positif
            </Badge>
            <article className="space-y-4 text-foreground/70 text-sm leading-relaxed">
              <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
                Akselerasi & Peluang Sektor Krusial
              </h2>
              <p>
                Digitalisasi memberikan kontribusi yang sangat signifikan dalam mentransformasi
                berbagai bidang kehidupan masyarakat Indonesia, menciptakan efisiensi tanpa batas
                geografis.
              </p>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1.5 font-bold text-[0.625rem] text-emerald-500 uppercase tracking-wide">
                  <CoinsIcon size={14} /> Sektor Ekonomi Digital
                </p>
                <p>
                  Membuka peluang bisnis baru melalui pertumbuhan e-commerce, fintech, dan UMKM
                  digital. Nilai ekonomi digital Indonesia bahkan diproyeksikan melonjak mencapai
                  $130 Miliar pada tahun 2025 .
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1.5 font-bold text-[0.625rem] text-emerald-500 uppercase tracking-wide">
                  <BookOpenIcon size={14} /> Edukasi & Kesehatan
                </p>
                <p>
                  Platform e-learning mereduksi kesenjangan geografis akses pendidikan berkualitas
                  hingga ke pelosok daerah. Di bidang kesehatan, integrasi rekam medis elektronik
                  dan telemedicine mempermudah jangkauan pelayanan medis publik.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="flex flex-col justify-between gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <div className="flex flex-col gap-3">
            <Badge className="mb-4 border-destructive/20 bg-destructive/10 text-destructive hover:bg-destructive/20">
              <MinusIcon className="mr-1" /> Dampak Negatif
            </Badge>
            <article className="space-y-4 text-foreground/70 text-sm leading-relaxed">
              <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
                Konsekuensi & Risiko Sosial-Teknis
              </h2>
              <p>
                Kemajuan teknologi digital yang tidak diimbangi dengan kesadaran moral memicu
                berbagai krisis siber dan sosial di tengah masyarakat.
              </p>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1.5 font-bold text-[0.625rem] text-destructive uppercase tracking-wide">
                  <WarningDiamondIcon size={14} /> Kekacauan Informasi & Kejahatan Siber
                </p>
                <p>
                  Tingginya penyebaran informasi palsu (hoaks) di media sosial mengancam stabilitas
                  sosial. Di sisi teknis, serangan malware, ransomware, dan phishing terus mengintai
                  infrastruktur kritis negara.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1.5 font-bold text-[0.625rem] text-destructive uppercase tracking-wide">
                  <UsersIcon size={14} /> Kesenjangan Digital
                </p>
                <p>
                  Meskipun penetrasi internet tinggi, ketimpangan kemampuan akses dan pemanfaatan
                  teknologi secara optimal antara masyarakat perkotaan dan pedesaan masih menjadi
                  tantangan sosial yang besar.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>

      <section className="mt-4 flex flex-col gap-5 rounded-lg border border-foreground/10 bg-foreground/5 p-5 shadow-xl backdrop-blur-xl md:p-7">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
            Fokus Utama: Isu Privasi dan Perlindungan Data
          </h2>
          <p className="text-foreground/70 text-sm leading-relaxed">
            Tantangan etis terbesar di era digital saat ini tertuju pada perlindungan hak privasi
            individu atas masifnya pengumpulan data pribadi oleh berbagai aplikasi.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition hover:bg-foreground/10">
              <p className="mb-1 flex items-center gap-1.5 text-[0.625rem] text-foreground/70 uppercase tracking-wide">
                Kondisi Publik <CaretDownIcon />
              </p>
              <p className="text-foreground/70 text-xs leading-relaxed">
                Kesadaran masyarakat Indonesia terhadap privasi data relatif masih rendah, sehingga
                banyak pengguna secara tidak sadar memberikan izin akses data yang terlalu luas
                kepada aplikasi.
              </p>
            </div>
            <div className="rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition hover:bg-foreground/10">
              <p className="mb-1 flex items-center gap-1.5 text-[0.625rem] text-foreground/70 uppercase tracking-wide">
                Kewajiban Etis IT <CaretDownIcon />
              </p>
              <p className="text-foreground/70 text-xs leading-relaxed">
                Profesional IT wajib mengadopsi prinsip{" "}
                <strong className="font-medium text-foreground">Privacy by Design</strong>.
                Perlindungan data harus diintegrasikan sejak awal perancangan sistem, bukan sekadar
                fitur tambahan di akhir.
              </p>
            </div>
            <div className="rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition hover:bg-foreground/10">
              <p className="mb-1 flex items-center gap-1.5 text-[0.625rem] text-foreground/70 uppercase tracking-wide">
                Payung Yuridis <CaretDownIcon />
              </p>
              <p className="text-foreground/70 text-xs leading-relaxed">
                Pengesahan{" "}
                <strong className="font-medium text-foreground">
                  UU Perlindungan Data Pribadi (PDP) No. 27 Tahun 2022
                </strong>{" "}
                menjadi tonggak hukum yang memaksa pengontrol data menerapkan standarisasi keamanan
                ketat demi melindungi pemilik hak data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
