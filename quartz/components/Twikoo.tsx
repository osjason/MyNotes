import { QuartzComponentConstructor, QuartzComponentProps, QuartzComponent } from "./types"


const Twikoo: QuartzComponent = (props: QuartzComponentProps) => {
  return <div id="Twikoo">
    <div id="tcomment"></div>
    <script src="https://cdn.staticfile.org/twikoo/1.6.32/twikoo.all.min.js"></script>
    <script>
      {`
twikoo.init({
  envId: 'https://os000jason-twikoo.hf.space', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
  el: '#tcomment', // 容器元素
})
      `}
    </script>
  </div>
}

export default (() => {
  return Twikoo
}) satisfies QuartzComponentConstructor