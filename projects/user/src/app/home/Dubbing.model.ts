export interface DubbingProject {
  projectId: number,
  videoLink: string,
  price: number,
  originalVideo:string,
  originalSrt: string,
  translatedSrt: string,
  dubbedVideo: string,
  videoTitle: string,
  videoThumbnail: string,
  videoTime: string,
  isPurchased: boolean,
  userDubbingProjectCreation: string
}
