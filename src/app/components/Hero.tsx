import { motion } from "motion/react";
import { Music2, Play } from "lucide-react";

interface HeroProps {
  onScrollToDemo: () => void;
  onScrollToContact: () => void;
}

export function Hero({ onScrollToDemo, onScrollToContact }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black pt-20 md:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6"
            >
              <Music2 className="w-4 h-4 text-purple-400" />
              <span className="text-xl text-purple-300 leading-tight">
                Nhà sản xuất âm thanh đoạt nhiều giải thưởng danh giá
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              Nguyễn Bá Quốc
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-snug"
            >
              Nhà soạn nhạc và sản xuất âm nhạc tự do
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onScrollToDemo}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 leading-tight">
                  <Play className="text-xl w-5 h-5" />
                  Nghe demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={onScrollToContact}
                className="text-xl px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 leading-tight"
              >
                Bắt đầu dự án
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-2xl" />

              {/* Image Container */}
              <div className="relative rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <img
                  src="https://yt3.googleusercontent.com/ohEoGQ0uXZKMMIhvVSzmN65Gm-8Eom_Ko62hJWRXtkQcs3Uj7B41qoi-Le3aPGh6zZkUesDW=s900-c-k-c0x00ffffff-no-rj"
                  alt="Nguyễn Bá Quốc - Nhà sản xuất âm nhạc"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Music Notes */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600/20 backdrop-blur-md rounded-full flex items-center justify-center border border-purple-500/30"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Music2 className="w-8 h-8 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}