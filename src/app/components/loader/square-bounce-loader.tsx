import { motion } from 'framer-motion';

const SquareBounceLoader = () => {
  return (
    <div className="w-screen h-screen mx-auto relative bg-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
      <motion.div
        className="w-16 h-16 bg-cyan-500 rounded"
        animate={{
          borderBottomRightRadius: ["4px", "3px", "40px", "4px"],
          rotate: [0, 22.5, 45, 67.5, 90],
          y: [0, 9, 18, 9, 0],
          scaleY: [1, 1, 0.9, 1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
       <motion.div
        className="w-16 h-1.5 opacity-40 bg-cyan-400 rounded-full mt-5"
        animate={{
          scaleX: [1, 1.2, 1],
          scaleY: [1, 1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          ease: "linear",
        }}
      />
        <motion.p
          className="text-base font-bold text-cyan-400 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          Loading...
        </motion.p>
      </div>
      
    </div>
  );
};

export default SquareBounceLoader;
