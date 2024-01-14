'use client';

import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

export const MdxImage: FC<ImageProps> = (props) => {
  return <Image {...props} alt={props.alt || 'markdown image'} />;
};
