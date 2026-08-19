// function SystemHealth() {
//   return (
//     <div className="w-[48%] rounded-2xl border border-[#e8e8e3] bg-[#f8f8f6] p-3">
//       <div className="mb-3 flex items-center justify-between">
//         <div>
//           <h2 className="text-lg font-semibold tracking-tight text-[#111111]">
//             Recent Activity
//           </h2>
//           <p className="mt-0.5 text-xs text-[#8a8a8a]">
//             Latest changes across your workspace
//           </p>
//         </div>
//         <button className="rounded-lg bg-[#111111] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#2a2a2a]">
//           View All
//         </button>
//       </div>
//       <div className="space-y-1.5">
//         {activities.map((activity, index) => (
//           <div
//             key={index}
//             className="group flex items-center justify-between rounded-xl border border-transparent bg-[#f1f1ed] px-3 py-2.5 transition hover:border-[#deded8] hover:bg-white"
//           >
//             <div className="flex min-w-0 items-center gap-3">
//               <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#deded8] bg-white">
//                 <div className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
//               </div>
//               <div className="min-w-0">
//                 <h3 className="truncate text-sm font-semibold text-[#111111]">
//                   {activity.title}
//                 </h3>
//                 <p className="mt-0.5 truncate text-[11px] text-[#8a8a8a]">
//                   {activity.user} · {activity.workspace}
//                 </p>
//               </div>
//             </div>
//             <span className="ml-3 shrink-0 text-[11px] text-[#999999]">
//               {activity.time}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SystemHealth;

import { div } from "framer-motion/client";
import React from "react";

const activities = [
  {
    title: "Typgraphy system updated ",
    User: "Ashish Mewada",
    workshop: "Typography Lab",
    Time: "15 days ago",
  },
  {
    title: "Dark Paletter created ",
    User: "Ashish Mewada",
    workshop: "Color Realm ",
    Time: "20 days ago",
  },
  {
    title: "Motion Soon ",
    User: "Ashish Mewada",
    workshop: "Motion Playground ",
    Time: "1 month ago",
  },
  {
    title: "Shadow Scale ",
    User: "Ashish Mewada",
    workshop: "Shadow Hub ",
    Time: "1.5 month ago",
  },
  {
    title: "Gradient System Updated",
    user: "Ashish Mewada",
    workspace: "Gradient Lab",
    time: "18 days ago",
  },
  {
    title: "New Design Tokens Added",
    user: "Ashish Mewada",
    workspace: "Design System",
    time: "5 days ago",
  },
];

function SystemHealth() {
  return (
    //   <h2 className="text-lg font-semibold tracking-tight text-[#111111]">
    //     Recent Activity
    //   </h2>
    //   <p className="mt-0.5 text-xs text-[#8a8a8a]">
    //     Latest changes across your workspace
    //   </p>
    // </div>
    // <button className="rounded-lg bg-[#111111] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#2a2a2a]">
    //   View All
    // </button>

    <div className="w-[48%] rounded-2xl border border-[#e8e8e3] bg-[#f8f8f6] p-3">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-[#111]">
            Recent Activity
          </h2>
          <p className="mt-0.5 text-xs text-[#8a8a8a]">
            Latest Changes across your workspace
          </p>
        </div>
        <button className="rounded-lg bg-[#111111] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#2a2a2a]">
          View All
        </button>
      </div>
    </div>
  );
}
export default SystemHealth;
