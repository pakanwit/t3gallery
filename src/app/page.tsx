import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  {
    name: "Air-Fryer-Steak-6.jpeg",
    key: "fdac7a1a-3f3e-4af2-abd2-5ed77d678807-opfr1d.jpeg",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/fdac7a1a-3f3e-4af2-abd2-5ed77d678807-opfr1d.jpeg",
    size: 133218,
    uploadedAt: "2024-06-23T15:54:21.000Z",
  },
  {
    name: "French-toast-sandwiches-with-ham-and-cheese.jpeg",
    key: "ef641249-676d-4405-8093-47e8cb26314e-xeyw8u.jpeg",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ef641249-676d-4405-8093-47e8cb26314e-xeyw8u.jpeg",
    size: 126575,
    uploadedAt: "2024-06-23T15:54:21.000Z",
  },
  {
    name: "apple-juice.jpeg",
    key: "ead41b93-c821-40d3-a29f-9cac32daab90-clf57x.jpeg",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ead41b93-c821-40d3-a29f-9cac32daab90-clf57x.jpeg",
    size: 95778,
    uploadedAt: "2024-06-23T15:54:21.000Z",
  },
  {
    name: "Golden_drop.jpeg",
    key: "aad70b4c-eb98-4968-8cb2-3f877137891f-27clob.jpeg",
    customId: null,
    url: "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/aad70b4c-eb98-4968-8cb2-3f877137891f-27clob.jpeg",
    size: 77624,
    uploadedAt: "2024-06-23T15:54:21.000Z",
  },
];

const mockImages = mockUrls.map((url, i) => ({
  name: url.name,
  url: url.url,
  id: i + 1,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48 text-white">
            {post.name}
          </div>
        ))}
        {/* {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt={image.name}
              className="w-full rounded-lg"
            />
          </div> */}
        {/* ))} */}
      </div>
    </main>
  );
}
