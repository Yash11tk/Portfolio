const Achievements = () => {
  const data = [
    {
      title: "150+ LeetCode Streak",
      desc: "Constantly solved 150+ algorithmic problems on LeetCode, covering arrays, trees, graphs, DP and more.",
      date: "2026",
      icon: "🔥",
    },
    {
      title: "LeetCode Badge",
      desc: "Earned 3 achievement badges on LeetCode, including the '50 Days Badge 2026' for consistent problem-solving.",
      date: "2026",
      icon: "🏅",
    },
    {
      title: "Secured Top 30 Rank",
      desc: "Among 400+ participants in Binary Blitz Hackathon.",
      date: "2025",
      icon: "🏆",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-white p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Achievements
      </h2>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#112240] p-5 rounded-xl shadow-md hover:scale-[1.02] transition"
          >
            <div className="text-2xl">{item.icon}</div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>

            <span className="text-xs text-blue-400 whitespace-nowrap">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;