//web rtc service
class PeerService {
    constructor() { //constructor function
      if (!this.peer) {
        this.peer = new RTCPeerConnection({ //new connecion 
          iceServers: [ //ice servers to get the ips 
            {
              urls: [
                "stun:stun.l.google.com:19302",
                "stun:global.stun.twilio.com:3478",
              ],
            },
          ],
        });
      }
    }
  

    //accept the call 
    async getAnswer(offer) {
      if (this.peer) {
        await this.peer.setRemoteDescription(offer);
        const ans = await this.peer.createAnswer();
        await this.peer.setLocalDescription(new RTCSessionDescription(ans));
        return ans;
      }
    }
  
    async setLocalDescription(ans) {
      if (this.peer) {
        await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
      }
    }
  
    async getOffer() { //function to get the offer
      if (this.peer) {
        const offer = await this.peer.createOffer(); //create offer 
        await this.peer.setLocalDescription(new RTCSessionDescription(offer));  //set it on local
        return offer;
      }
    }
  }
  
  export default new PeerService();