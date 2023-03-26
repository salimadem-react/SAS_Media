import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
}
