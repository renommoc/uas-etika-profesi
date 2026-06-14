import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { ProfileCard } from "@/components/profile-card";
import { teamMembers } from "@/constants/team";

export const Team = () => {
  return (
    <div className="mx-auto max-w-[90%] pt-28 pb-10">
      <div className="mb-10 flex flex-col items-center space-y-4 text-pretty text-center">
        <h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
          Susunan Tim
        </h1>
        <p className="text-pretty text-foreground/70 text-sm lg:text-base">4 MahaSigma</p>
        <div className="flex items-center gap-2 pt-2">
          <a
            href="/Laporan_Ilmiah_Kelompok_9.pdf"
            download="Laporan_Ilmiah_Kelompok_9.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/10 bg-foreground/10 px-5 py-2.5 font-medium text-foreground text-xs shadow-md backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/20"
          >
            <DownloadSimpleIcon size={16} weight="bold" />
            Laporan Ilmiah (PDF)
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <ProfileCard
            key={member.name}
            className="group relative h-108 w-82 max-w-full overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 shadow-xl transition-[border-color,box-shadow] duration-300 hover:border-foreground/5 hover:shadow-background/30 hover:shadow-lg"
          >
            <div
              className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at var(--glint-x) var(--glint-y), rgba(255,255,255,0.07) 0%, transparent 60%)",
              }}
            />

            <div className="absolute inset-0 -z-20 rounded-2xl bg-linear-to-tr from-[#483AA0] to-[#948979] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
            <div className="absolute inset-0 -z-10 h-[108%] w-full transition-transform duration-500 ease-out group-hover:scale-105">
              <img
                src={member.avatarUrl}
                alt={member.name}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-6 text-center">
              <h3 className="font-bold font-sans text-foreground text-lg tracking-wide drop-shadow">
                {member.name}
              </h3>
              <p className="mt-1 font-medium text-foreground/70 text-sm drop-shadow-sm">
                {member.role}
              </p>
            </div>
          </ProfileCard>
        ))}
      </div>
    </div>
  );
};
