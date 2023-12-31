// 'use client'
// import BlogCard from "@/components/widgets/Card";
// import { Text, Divider, Link } from "@nextui-org/react";
// import '@/styles/page.scss';
// import Category from '@/components/Category';

// export default function Home() {
//   return (
//     <main className="flex justify-around">
//       {/* Centered container for categories and BlogCards */}
//       <div className="flex w-2/3 justify-center ml-[6rem]">
//         {/* Left side for categories */}
//         <Category />

//         {/* Right side for BlogCards */}
//         <div className="w-3/4 p-4">
//           {/* Inside the container, render your BlogCard components */}
//           <BlogCard />
//           <BlogCard />
//           <BlogCard />
//           {/* Add more BlogCard components as needed */}
//         </div>
//       </div>
//     </main>
//   );
// }

'use client'
import { Input, Button } from "@nextui-org/react";
import BlogCard from "@/components/widgets/Card";
import { Text, Divider, Link } from "@nextui-org/react";
import '@/styles/page.scss';
import Category from '@/components/Category';

export default function Home() {
  return (
    <main className="flex justify-around">
      {/* Centered container for categories and BlogCards */}
      <div className="flex w-2/3 justify-center ml-[6rem]">
        {/* Left side for categories */}
        <Category />

        {/* Right side for BlogCards */}
        <div className="w-3/4 p-4">
          {/* Search Bar */}
          <div className="flex items-center mb-4">
            <Input
              type="text"
              placeholder="Search..."
              className=" w-96 ml-6"
            />
          </div>

          {/* Inside the container, render your BlogCard components */}
          <BlogCard />
          <BlogCard />
          <BlogCard />
          {/* Add more BlogCard components as needed */}
        </div>
      </div>
    </main>
  );
}
