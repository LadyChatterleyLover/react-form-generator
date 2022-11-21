import {
  PlayCircleOutlined,
  DownloadOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

interface ListItem {
  // eslint-disable-next-line no-undef
  icon: JSX.Element
  title: string
}

const NavHeader = () => {
  const list: ListItem[] = [
    {
      icon: <PlayCircleOutlined />,
      title: '运行',
    },
    {
      icon: <DownloadOutlined />,
      title: '导出文件',
    },
    {
      icon: <CopyOutlined />,
      title: '复制代码',
    },
    {
      icon: <DeleteOutlined />,
      title: '清空',
    },
  ]

  const clickItem = (item: ListItem) => {}

  return (
    <div className="flex items-center justify-between px-5 h-full">
      <div className="flex items-center leading-8 font-bold text-lg text-[#00afff]">
        <div>cc-form-generator</div>
        <div>
          <a
            href="https://github.com/LadyChatterleyLover/react-form-generator"
            target="_blank"
          >
            <img
              src="https://github.githubassets.com/pinned-octocat.svg"
              className="h-[22px] w-[22px] relative top-[1px] ml-2"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center">
        {list.map((item, index) => {
          return (
            <div
              className="flex items-center text-[#409eff] last:text-[#f56c6c] text-base cursor-pointer mr-4"
              key={index}
              onClick={() => clickItem(item)}
            >
              <div className="relative top-[-3px] mr-1 ">{item.icon}</div>
              <div>{item.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NavHeader
