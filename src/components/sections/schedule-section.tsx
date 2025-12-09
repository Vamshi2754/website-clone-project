import { ArrowUpRight } from 'lucide-react';

const eventsData = [
  {
    date: "Jun 27",
    title: "Building MVPs with Bubble",
    href: "/meetup/building-mvps-with-bubble",
    type: "App Development",
    time: "09.30 - 12.00",
    location: "Jakarta, Indonesia",
    speaker: "John Doe",
  },
  {
    date: "Jun 28",
    title: "Automating with Zapier & Make",
    href: "/meetup/automating-with-zapier-make",
    type: "Workflow Animation",
    time: "09.30 - 12.00",
    location: "Toronto, Canada",
    speaker: "Sandy Garfield",
  },
  {
    date: "Jun 29",
    title: "No-Code Showcase",
    href: "/meetup/no-code-showcase",
    type: "Member Project Demos",
    time: "09.30 - 12.00",
    location: "Nairobi, Kenya",
    speaker: "Obba Sade",
  },
];

const ScheduleSection = () => {
  return (
    <section id="Schedule" className="bg-foreground text-background py-16 md:py-20 lg:py-[120px] overflow-hidden max-w-full">
      <div className="container">
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="font-body font-bold text-xs uppercase tracking-[0.1em] text-primary">
            UPCOMING SCHEDULE
          </div>
          <h2 className="mt-3 md:mt-4 font-display text-3xl md:text-4xl lg:text-[48px] leading-none uppercase text-background break-words">
            Meetup{' '}&amp;{' '}Workshop
          </h2>
        </div>

        <div className="grid gap-4 md:gap-6 lg:gap-8">
          {eventsData.map((event, index) => (
            <a
              key={index}
              href={event.href}
              className="group grid grid-cols-[auto,1fr] overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl"
            >
              <div className="flex w-[80px] sm:w-[100px] lg:w-[120px] flex-shrink-0 items-center justify-center bg-primary p-4 md:p-6">
                <div className="font-display text-xl sm:text-2xl md:text-3xl font-black text-primary-foreground transform -rotate-90 whitespace-nowrap tracking-tight">
                  {event.date}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between bg-secondary p-6 sm:p-8 md:p-10 lg:p-12 text-secondary-foreground">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4 md:mb-6">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black uppercase leading-tight break-words">
                      {event.title}
                    </h3>
                    <ArrowUpRight className="h-7 w-7 md:h-9 md:w-9 lg:h-10 lg:w-10 flex-shrink-0 text-secondary-foreground transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 font-body text-sm md:text-base uppercase tracking-wider">
                    <p className="font-bold opacity-80">{event.type}</p>
                    <p className="font-bold">{event.time}</p>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-secondary-foreground/30">
                  <div className="flex flex-col gap-3 sm:gap-4 font-body text-xs md:text-sm uppercase tracking-wider md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold opacity-70">PLACE:</span>
                      <span className="font-bold">{event.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold opacity-70">SPEAKERS:</span>
                      <span className="font-bold">{event.speaker}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;