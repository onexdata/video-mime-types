exports.extnesions = {
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3g2": "video/3gpp2",
  "m3u8": "application/x-mpegURL",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "jpgv": "video/jpeg",
  "jpm": "video/jpm",
  "jgpm": "video/jpm",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "ts": "video/mp2t",
  "mp4": "video/mp4",
  "mp4v": "video/mp4",
  "mpg4": "video/mp4",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mpe": "video/mpeg",
  "m1v": "video/mpeg",
  "m2v": "video/mpeg",
  "ogv": "video/ogg",
  "qt": "video/quicktime",
  "mov": "video/quicktime",
  "uvh": "video/vnd.dece.hd",
  "uvvh": "video/vnd.dece.hd",
  "uvm": "video/vnd.dece.mobile",
  "uvvm": "video/vnd.dece.mobile",
  "uvp": "video/vnd.dece.pd",
  "uvvp": "video/vnd.dece.pd",
  "uvs": "video/vnd.dece.sd",
  "uvvs": "video/vnd.dece.sd",
  "uvv": "video/vnd.dece.video",
  "uvvv": "video/vnd.dece.video",
  "dvb": "video/vnd.dvb.file",
  "fvt": "video/vnd.fvt",
  "mxu": "video/vnd.mpegurl",
  "m4u": "video/vnd.mpegurl",
  "pyv": "video/vnd.ms-playready.media.pyv",
  "uvu": "video/vnd.uvvu.mp4",
  "uvvu": "video/vnd.uvvu.mp4",
  "viv": "video/vnd.vivo",
  "webm": "video/webm",
  "f4v": "video/x-f4v",
  "fli": "video/x-fli",
  "flv": "video/x-flv",
  "m4v": "video/x-m4v",
  "mkv": "video/x-matroska",
  "mk3d": "video/x-matroska",
  "mks": "video/x-matroska",
  "mng": "video/x-mng",
  "asf": "video/x-ms-asf",
  "asx": "video/x-ms-asf",
  "vob": "video/x-ms-vob",
  "wm": "video/x-ms-wm",
  "wmv": "video/x-ms-wmv",
  "wmx": "video/x-ms-wmx",
  "wvx": "video/x-ms-wvx",
  "avi": "video/x-msvideo",
  "movie": "video/x-sgi-movie",
  "smv": "video/x-smv"
}

exports.lookup = function (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.extensions[extension] || false
}