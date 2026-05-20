import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import lemurPro from "../../public/images/lemurPro.jpg";
import philipsDisplay from "../../public/images/philipsDisplay.png";
import hhkb from "../../public/images/hhkb.jpg";

export const metadata: Metadata = {
  title: "My Gear",
};

export default function Gear() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Gear
          </h2>
          <div className="mt-10 space-y-12 mx-auto border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16">
            <section>
              <h3 className="text-xl font-semibold text-white mb-4">
                使用しているパソコン
              </h3>
              <div className="h-56 flex items-center justify-center mb-4">
                <Image
                  src={lemurPro}
                  alt="System76 Lemur Pro"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="text-gray-300 space-y-3">
                <p>
                  メイン：System76 の Lemur Pro
                  <br />
                  サブマシン：M1 Macbook Air
                </p>
                <p>
                  メインマシンは
                  <Link
                    href="/blog/linux-as-main"
                    className="text-blue-400 hover:underline"
                  >
                    以前の記事
                  </Link>
                  でも紹介した System76 の Lemur Pro という PC です。OS は
                  Windows ではなく、Linux の Pop!_OS です。
                </p>
                <p>
                  時々、どうしても Adobe のソフトが使わないといけない時があるので、その時は
                  Macbook Air を使っています。（月に１回くらいの頻度ですが）
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">
                ディスプレイ
              </h3>
              <div className="h-56 flex items-center justify-center mb-4">
                <Image
                  src={philipsDisplay}
                  alt="PHILIPS 24E1N5500E/11"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="text-gray-300">
                <p>
                  PHILIPS 24E1N5500E/11 という、24 インチ、WQHD のディスプレイを
                  2 台ならべて使っています。
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">
                キーボード
              </h3>
              <div className="h-56 flex items-center justify-center mb-4">
                <Image
                  src={hhkb}
                  alt="HHKB Professional Classic Type-S"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="text-gray-300 space-y-3">
                <p>
                  HHKB Professional Classic Type-S 英語配列／墨を使っています。
                </p>
                <p>
                  静電容量無接点方式の Type-S は静粛性と高速タイピングを両立。60
                  キーのコンパクト設計（A4 ハーフサイズ）で、ホームポジションから手を動かさずにショートカット操作ができます。
                </p>
                <p>
                  USB Type-C 有線接続、押下圧 45g ／ストローク
                  3.8mm。打鍵感が気持ちよくて、つい長文を打ちたくなります。
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
