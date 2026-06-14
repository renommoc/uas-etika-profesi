import { BankIcon, CaretDownIcon, GlobeIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Cases = () => {
  return (
    <div className="mx-auto max-w-[90%] pt-28 pb-10">
      <div className="mb-10 flex flex-col items-center space-y-4 text-pretty text-center">
        <h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
          Analisis Kasus Nyata Pelanggaran Etika IT
        </h1>
        <p className="text-pretty text-foreground/70 text-sm lg:text-base">
          Menguraikan kegagalan sistemik, eksploitasi data, serta implikasi etis dari dua skandal
          besar di tingkat nasional dan internasional.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="flex flex-col justify-between gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <div className="flex flex-col gap-3">
            <div className="mb-4 flex items-center justify-between">
              <Badge>
                <BankIcon /> Nasional
              </Badge>
              <Badge variant="outline">2021</Badge>
            </div>
            <article className="space-y-4 text-foreground/70 text-sm leading-relaxed">
              <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
                Kebocoran Data BPJS Kesehatan
              </h2>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1 text-[0.625rem] uppercase tracking-widest">
                  Kronologi dan Dampak <CaretDownIcon weight="bold" />
                </p>
                <p>
                  Pada Mei 2021,{" "}
                  <strong className="font-semibold text-foreground">
                    data 279 juta peserta BPJS Kesehatan diduga bocor
                  </strong>{" "}
                  dan diperjualbelikan di forum dark web Raid Forums. Data yang dikompromikan
                  mencakup Nomor Induk Kependudukan (NIK), nomor telepon, alamat lengkap, hingga
                  riwayat kepesertaan. Insiden ini tidak hanya mengancam privasi jutaan warga negara
                  tetapi juga merusak kepercayaan publik terhadap sistem digital pelayanan
                  pemerintah.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1 text-[0.625rem] uppercase tracking-widest">
                  Analisis Etika <CaretDownIcon weight="bold" />
                </p>
                <p>
                  Dari sisi etika, kasus ini menunjukkan{" "}
                  <strong className="font-semibold text-foreground">
                    kegagalan penerapan standar keamanan data
                  </strong>{" "}
                  seperti enkripsi dan akses berlapis. Institusi terkait juga dinilai minim
                  akuntabilitas dan transparansi pasca insiden. Hal ini melanggar prinsip IEEE
                  tentang perlindungan kesejahteraan publik serta mengabaikan tanggung jawab
                  profesional dalam menjaga kerahasiaan data sensitif.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1 text-[0.625rem] uppercase tracking-widest">
                  Implikasi Hukum <CaretDownIcon weight="bold" />
                </p>
                <ul className="list-inside list-disc space-y-2 text-foreground/70 text-sm">
                  <li>
                    <strong className="text-foreground">Pasal 30 UU ITE</strong> » akses tanpa hak
                    ke sistem elektronik.
                  </li>
                  <li>
                    <strong className="text-foreground">Pasal 32 UU ITE</strong> » pengubahan &
                    pemindahan data tanpa hak.
                  </li>
                  <li>
                    <strong className="text-foreground">Pasal 46 UU ITE</strong> » ancaman pidana
                    hingga 8 tahun & denda Rp 800 juta.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="flex flex-col justify-between gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <div className="flex flex-col gap-3">
            <div className="mb-4 flex items-center justify-between">
              <Badge>
                <GlobeIcon /> Internasional
              </Badge>
              <Badge variant="outline">2018</Badge>
            </div>
            <article className="space-y-4 text-foreground/70 text-sm leading-relaxed">
              <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
                Skandal Cambridge Analytica & Facebook
              </h2>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1 text-[0.625rem] uppercase tracking-widest">
                  Kronologi dan Dampak <CaretDownIcon weight="bold" />
                </p>
                <p>
                  Cambridge Analytica berhasil{" "}
                  <strong className="font-semibold text-foreground">
                    memanen data pribadi lebih dari 87 juta pengguna Facebook
                  </strong>{" "}
                  tanpa persetujuan melalui aplikasi kuis "thisisyourdigitalife". Data tersebut
                  kemudian digunakan untuk profiling pemilih dalam Pemilu Presiden AS 2016 dan
                  referendum Brexit, sehingga mengancam proses demokrasi melalui manipulasi opini
                  publik.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1 text-[0.625rem] uppercase tracking-widest">
                  Analisis Etika <CaretDownIcon weight="bold" />
                </p>
                <p>
                  Dari perspektif etika, terjadi{" "}
                  <strong className="font-semibold text-foreground">
                    pelanggaran transparansi penggunaan data
                  </strong>{" "}
                  untuk tujuan politik lain tanpa persetujuan pemiliknya. Facebook juga gagal
                  menjalankan fungsi due diligence terhadap pihak ketiga, sehingga melanggar kode
                  etik IEEE yang mewajibkan perlindungan privasi individu.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="flex items-center gap-1 text-[0.625rem] uppercase tracking-widest">
                  Implikasi Hukum <CaretDownIcon weight="bold" />
                </p>
                <ul className="list-inside list-disc space-y-2 text-foreground/70 text-sm">
                  <li>
                    <strong className="text-foreground">Denda FTC $5 Miliar</strong> » sanksi
                    finansial historis terhadap Facebook atas kelalaian data.
                  </li>
                  <li>
                    <strong className="text-foreground">Kebangkrutan Korporasi</strong> » Cambridge
                    Analytica dinyatakan pailit dan resmi dibubarkan.
                  </li>
                  <li>
                    <strong className="text-foreground">Percepatan Regulasi GDPR</strong> » memicu
                    penguatan aturan privasi global dan pemanggilan Kongres AS.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};
