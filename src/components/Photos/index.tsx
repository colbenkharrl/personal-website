import Image from 'next/image';
import clsx from 'clsx';

import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';

export function Photos() {
  return (
    <div className="mt-16 sm:mt-20" data-testid="Photos">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[1/1] w-28 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-40 sm:rounded-2xl md:w-48 lg:w-56 xl:w-64 2xl:w-72',
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
