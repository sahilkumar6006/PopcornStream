import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import VideoPlayer from '@/components/VideoPlayer';
import VideoCard from '@/components/VideoCard';
import { videos, trendingVideos } from '@/data/mockData';
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share, Bookmark, Flag } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const WatchPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the current video
  const allVideos = [...videos, ...trendingVideos];
  const currentVideo = allVideos.find(video => video.id === id);
  
  // Get related videos (excluding current)
  const relatedVideos = allVideos
    .filter(video => video.id !== id)
    .slice(0, 5);
  
  if (!currentVideo) {
    return (
      <div className="min-h-screen bg-streambg text-foreground">
        <Navbar />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Video not found</h1>
          <p className="text-muted-foreground mb-6">The video you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-streambg text-foreground">
      <Navbar />
      
      <div className="container px-4 py-6 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content */}
          <div className="w-full lg:w-8/12">
            {/* Video Player */}
            <VideoPlayer 
              src="https://cdn.gpteng.co/lovable-project-video-placeholder.mp4" 
              poster={currentVideo.thumbnail}
              title={currentVideo.title}
            />
            
            {/* Video Info */}
            <div className="mt-4">
              <h1 className="text-xl font-bold">{currentVideo.title}</h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-streamblue-600 to-purple-600 text-white">
                      {currentVideo.channelName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-medium">{currentVideo.channelName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 5) + 1}M subscribers
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="ml-6 bg-secondary text-white hover:bg-streamblue border-none"
                  >
                    Subscribe
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-border rounded-full overflow-hidden">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="rounded-l-full px-4 rounded-r-none border-r border-border"
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      {Math.floor(Math.random() * 100) + 10}K
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="rounded-r-full px-3 rounded-l-none"
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  
                  <Button variant="ghost" size="sm">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium">
                      {currentVideo.views} views • {currentVideo.timestamp}
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-sm">
                  <p>
                    {currentVideo.title} - This is a detailed description of the video content. The creator explains various aspects covered in this tutorial/documentary/entertainment piece.
                  </p>
                  <Button variant="link" className="px-0 text-streamblue">
                    Show more
                  </Button>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              {/* Comments section - simplified for this example */}
              <div>
                <h3 className="font-medium mb-4">Comments • 243</h3>
                
                {/* Sample Comment */}
                <div className="flex gap-3 mb-6">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-secondary">U</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">Username</span>
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                    </div>
                    <p className="text-sm mt-1">
                      Great video! I learned so much from this content. Looking forward to more videos from this channel.
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1.5" />
                        42
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsDown className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar / Related Videos */}
          <div className="w-full lg:w-4/12">
            <h3 className="font-medium mb-4">Related Videos</h3>
            <div className="space-y-4">
              {relatedVideos.map(video => (
                <div key={video.id} className="flex gap-3">
                  <div className="flex-shrink-0 w-40 h-24 relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-2">
                      <a href={`/watch/${video.id}`} className="hover:text-streamblue">
                        {video.title}
                      </a>
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 hover:text-streamblue">
                      {video.channelName}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {video.views} views • {video.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;