import React from "react";

const members = [
  { name: "Ava Chen", role: "Product Lead", color: "bg-[#111111]" },
  { name: "Noah Park", role: "UX Designer", color: "bg-[#7a7a72]" },
  { name: "Mila Gomez", role: "Motion Lead", color: "bg-[#b5b3aa]" },
];

function Team() {
  return (
    <section className="rounded-[28px] border border-[#e2e2dd] bg-white p-5 shadow-[0_18px_45px_rgba(17,17,17,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[9px] uppercase tracking-[0.18em] text-[#8a8a85]">
            Team
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.05em] text-[#111111]">
            This week
          </h3>
        </div>

        <button className="rounded-full border border-[#e7e7e2] bg-[#f7f7f5] px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.16em] text-[#111111]">
          Invite
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {members.map((member) => (
          <div key={member.name} className="flex items-center justify-between rounded-2xl border border-[#efefe9] bg-[#f9f9f7] p-3">
            <div className="flex items-center gap-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full ${member.color} text-xs font-semibold text-white`}>
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-[#111111]">{member.name}</p>
                <p className="text-[10px] text-[#8a8a85]">{member.role}</p>
              </div>
            </div>

            <span className="rounded-full bg-[#e9f8ec] px-2 py-1 text-[8px] font-medium uppercase tracking-[0.14em] text-[#1d7b4f]">
              Active
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-[#f8f8f6] p-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#8a8a85]">
          <span>Delivery rate</span>
          <span className="text-[#111111]">72%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e9e9e4]">
          <div className="h-full w-[72%] rounded-full bg-[#111111]" />
        </div>
      </div>
    </section>
  );
}

export default Team;
