import { rumusanMasalah, stats } from "@/constants/home";

export const Home = () => {
  return (
    <div className="mx-auto max-w-[90%] pt-28 pb-10">
      <div className="mb-10 flex flex-col items-center space-y-4 text-pretty text-center">
        <h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
          Profesionalisme & Kode Etik Profesi IT di Indonesia
        </h1>
        <p className="text-pretty text-foreground/70 text-sm lg:text-base">
          Tugas Akhir Mata Kuliah Etika Profesi
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="flex flex-col justify-between gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <article className="space-y-4 text-foreground/70 text-sm leading-relaxed">
            <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
              Latar Belakang
            </h2>
            <p>
              Perkembangan teknologi informasi yang pesat telah membawa perubahan mendasar di
              Indonesia. Dengan tingkat penetrasi internet yang mencapai{" "}
              <strong className="font-semibold text-foreground">lebih dari 78%</strong> dari total
              penduduk, Indonesia kini menghadapi tantangan besar dalam memastikan pertumbuhan ini
              berjalan seiring dengan penerapan nilai-nilai etika yang bertanggung jawab.
            </p>
            <p>
              Pertumbuhan industri yang eksponensial turut mendorong tingginya permintaan tenaga
              profesional IT. Namun, seorang profesional tidak hanya dituntut memiliki kompetensi
              teknis, tetapi juga dimensi moral dan sosial. Adanya kode etik dari{" "}
              <span className="font-medium text-foreground">IPTEK</span> serta payung hukum{" "}
              <span className="font-medium text-foreground">
                UU ITE (No. 11/2008 jo UU No. 19/2016)
              </span>{" "}
              menegaskan pentingnya tata kelola etika, meski dalam implementasinya kasus pelanggaran
              etika profesi IT masih marak terjadi.
            </p>
          </article>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-2 rounded-xl border border-foreground/5 bg-foreground/5 p-3 transition last:col-span-2 hover:bg-foreground/10 sm:last:col-span-1"
              >
                <Icon size={18} className="text-foreground/40" />
                <div className="text-foreground/50 text-xs">{label}</div>
                <div className="font-bold text-foreground text-lg tracking-tight sm:col-span-1 md:text-xl">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-between gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <article className="space-y-4">
            <h2 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
              Rumusan Masalah
            </h2>
            <div className="space-y-3">
              {rumusanMasalah.map((text, i) => (
                <div
                  key={text.slice(0, 16)}
                  className="flex items-center gap-3 rounded-xl border border-foreground/10 p-2 transition hover:bg-foreground/5"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-foreground/10 font-bold text-foreground text-xs">
                    {i + 1}
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>

      <section className="mt-4 flex flex-col gap-5 rounded-lg border border-foreground/10 bg-foreground/5 p-5 shadow-xl backdrop-blur-sm md:p-7">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <article className="space-y-4">
            <h2 className="font-bold text-2xl text-foreground tracking-tight">Video Edukasi</h2>
            <p className="text-foreground/70 text-sm leading-relaxed">Kerjain Wis</p>
          </article>
          {/*<ul className="flex flex-col gap-2">
              {videoPoints.map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground/70 text-sm">
                  <span className="size-1.5 shrink-0 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>*/}

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-foreground/10 bg-black/40">
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/XdUNtwqRncs?rel=0"
              title="Video Edukasi"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};
