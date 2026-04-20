import Image from "next/image";

type Props = {
  imageUrl?: string;
  width: number;
  height: number;
};

const MarkdownImage = ({ imageUrl, width, height }: Props) => {
  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Blog Eyecatch"
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default MarkdownImage;
