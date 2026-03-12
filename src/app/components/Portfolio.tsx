import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Pause, Film, Music, Tv, Briefcase } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  icon: typeof Film;
  color: string;
  audio: string;
}

export function Portfolio() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const projects: Project[] = [
    {
      id: 1,
      title: "Bốn mùa trên thao trường",
      category: "Nhạc đỏ",
      description:
        "Tác phẩm thuộc dòng nhạc đỏ với giai điệu trang nghiêm và giàu cảm xúc.",
      duration: "4:09",
      icon: Film,
      color: "purple",
      audio: "/audio/four-season.mp3",
    },
    {
      id: 2,
      title: "Đoài Phương - Miền quê đáng sống",
      category: "Nhạc quê hương",
      description:
        "Ca khúc mang âm hưởng quê hương Việt Nam, mộc mạc và sâu lắng.",
      duration: "4:06",
      icon: Music,
      color: "blue",
      audio: "/audio/doaiphuong.mp3",
    },
    {
      id: 3,
      title: "Gửi em",
      category: "Nhạc trữ tình",
      description:
        "Tác phẩm trữ tình với giai điệu nhẹ nhàng và cảm xúc tinh tế.",
      duration: "5:31",
      icon: Music,
      color: "purple",
      audio: "/audio/guiem.mp3",
    },
    {
      id: 4,
      title: "Hồng Phong - Mảnh trời quê ta",
      category: "Nhạc quê hương",
      description:
        "Ca khúc mang âm hưởng truyền thống, đậm chất quê hương.",
      duration: "3:10",
      icon: Tv,
      color: "blue",
      audio: "/audio/hongphong.mp3",
    },
    {
      id: 5,
      title: "Khúc hát người thầy giáo quân đội",
      category: "Nhạc đỏ",
      description:
        "Tác phẩm thuộc dòng nhạc đỏ viết về người thầy giáo quân đội với sắc thái trang trọng và truyền cảm.",
      duration: "3:46",
      icon: Music,
      color: "purple",
      audio: "/audio/thaygiaoqd.mp3",
    },
    {
      id: 6,
      title: "Tràng An quê mẹ",
      category: "Nhạc quê hương",
      description:
        "Giai điệu mang âm hưởng quê hương Việt Nam, sâu lắng và giàu bản sắc.",
      duration: "4:15",
      icon: Music,
      color: "blue",
      audio: "/audio/trangan.mp3",
    },
  ];

  const togglePlay = (id: number) => {
    const currentAudio = audioRefs.current[id];
    
    if (playingId === id) {
      // Pause and reset current track
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      setPlayingId(null);
    } else {
      // Stop any currently playing track
      if (playingId !== null && audioRefs.current[playingId]) {
        const previousAudio = audioRefs.current[playingId];
        if (previousAudio) {
          previousAudio.pause();
          previousAudio.currentTime = 0;
        }
      }
      
      // Play new track
      if (currentAudio) {
        currentAudio.play();
      }
      setPlayingId(id);
    }
  };

  // Handle audio end event
  useEffect(() => {
    const handleAudioEnd = (id: number) => {
      if (playingId === id) {
        setPlayingId(null);
      }
    };

    Object.entries(audioRefs.current).forEach(([id, audio]) => {
      if (audio) {
        const projectId = parseInt(id);
        const endHandler = () => handleAudioEnd(projectId);
        audio.addEventListener('ended', endHandler);
        
        return () => {
          audio.removeEventListener('ended', endHandler);
        };
      }
    });
  }, [playingId]);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Tác phẩm tiêu biểu
          </h2>
          <p className="text-gray-400 text-2xl max-w-xl mx-auto leading-relaxed">
            Tổng hợp các dự án tiêu biểu với nhiều phong cách <br></br>và thể loại đa dạng
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isPlaying = playingId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    project.color === "purple"
                      ? "from-purple-600/10 to-blue-600/10"
                      : "from-blue-600/10 to-purple-600/10"
                  } opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative p-6">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                        project.color === "purple"
                          ? "from-purple-600/30 to-purple-800/30"
                          : "from-blue-600/30 to-blue-800/30"
                      } flex items-center justify-center`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          project.color === "purple"
                            ? "text-purple-400"
                            : "text-blue-400"
                        }`}
                      />
                    </div>
                    <span className="text-sm text-gray-400">
                      {project.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-song-title font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-song-genre text-purple-400 mb-3 leading-relaxed">
                    {project.category}
                  </p>
                  <p className="text-gray-400 text-song-desc mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Play Button */}
                  <button
                    onClick={() => togglePlay(project.id)}
                    className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 leading-tight ${
                      isPlaying
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500"
                        : "bg-white/5 text-white border border-white/20 hover:bg-white/10"
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4" />
                        Đang phát
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Nghe thử
                      </>
                    )}
                  </button>

                  {/* Hidden Audio Element */}
                  <audio
                    ref={(el) => {
                      audioRefs.current[project.id] = el;
                    }}
                    src={project.audio}
                    preload="none"
                  />
                </div>

                {/* Playing Animation */}
                {isPlaying && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4 leading-relaxed">
            Muốn tạo một dự án âm nhạc mới?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:scale-105 transition-transform hover:shadow-lg hover:shadow-purple-500/50 leading-tight"
          >
            Yêu cầu hợp tác với nhạc sĩ
          </a>
        </motion.div>
      </div>
    </section>
  );
}