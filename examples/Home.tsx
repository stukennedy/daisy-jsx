import { Badge } from "../components/data-display/Badge";
import { Button } from "../components/actions/Button";
import { Card, CardBody, CardTitle } from "../components/data-display/Card";
import { Modal, ModalBox } from "../components/actions/Modal";
import { Swap, SwapOff, SwapOn } from "../components/actions/Swap";
import { Theme } from "../components/actions/Theme";
import { Carousel, CarouselItem } from "../components/data-display/Carousel";
import { Chat, ChatImage, ChatHeader, ChatBubble, ChatFooter } from "../components/data-display/ChatBubble";
import { FormControl } from "../components/data-input/FormControl";
import { Label } from "../components/data-input/Label";
import { Checkbox } from "../components/data-input/Checkbox";

export default () => (
  <div className="flex flex-col gap-4 items-center">
    <div className="max-w-sm">
      <Button color="primary" wide _="on click call #my_modal_1.showModal()">Open Modal</Button>
      <Modal id="my_modal_1">
        <ModalBox>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </ModalBox>
      </Modal>
    </div>

    <Swap rotate className="text-6xl">
      <SwapOn>😈</SwapOn>
      <SwapOff>😇</SwapOff>
    </Swap>

    <Theme value="synthwave" />

    <Badge color="primary" size="lg">Hello</Badge>

    <Card className="bg-secondary text-secondary-content">
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <p>Card content</p>
      </CardBody>
    </Card>


    <Carousel position="end">
      {Array(20).fill(null).map((_, id) => (
        <CarouselItem key={id}>
          <img id={`image-${id}`} src={`https://via.assets.so/movie.png?id=${id}&q=95&w=250&h=400`} alt="Image 1" />
        </CarouselItem>
      ))}
    </Carousel>
    <div className="flex w-full justify-center gap-2 py-2">
      {Array(20).fill(null).map((_, id) => (
        <Button key={id} href={`#image-${id}`}>{id + 1}</Button>
      ))}
    </div>

    <Chat align="end">
      <ChatImage>
        <img 
          className="w-10 rounded-full avatar" 
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </ChatImage>
      <ChatHeader>
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </ChatHeader>
      <ChatBubble color="primary">You were the Chosen One!</ChatBubble>
      <ChatFooter className="flex justify-start">
        Delivered
      </ChatFooter>
    </Chat>

  <FormControl className="w-52">
    <Label text="Remember me">
      <Checkbox />
    </Label>
  </FormControl>
  </div>
)