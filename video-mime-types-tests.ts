import * as mime from 'video-mime-types';

mime.lookup('.mp4');             // 'video/mp4'
mime.lookup('mp4');              // 'video/mp4'
mime.lookup('/src/videos/f.mp4');// 'video/mp4'
mime.lookup('json');             // false
mime.lookup('cats');             // false
