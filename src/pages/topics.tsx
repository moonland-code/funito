import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const topics = [
  {
    title: "معما",
    link: "/topics/frontend",
  },
  {
    title: "جوک",
    link: "/topics/backend",
  },
  {
    title: "سرگرمی",
    link: "/topics/devops",
  },
];

function generateImageWithText(text) {
  const canvas = document.createElement("canvas");
  canvas.width = 270;
  canvas.height = 180;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#4B5563";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold 26px Vazir";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.direction = "rtl";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL();
}

export default function Topics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const generated = topics.map((t) => ({
      ...t,
      image: generateImageWithText(t.title),
    }));
    setImages(generated);
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "yellow" })}>موضوعات&nbsp;</span>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-10 w-full max-w-7xl mx-auto">
        {images.map((topic, index) => (
          <Link key={index} to={topic.link} className="w-full flex justify-center">
            <Card className="w-[270px] flex flex-col cursor-pointer transition-transform hover:scale-105 rounded-xl overflow-hidden shadow-md">
              <CardBody className="p-0">
                <Image
                  alt={topic.title}
                  src={topic.image}
                  className="object-cover w-full h-[180px] rounded-xl"
                />
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </DefaultLayout>
  );
}
