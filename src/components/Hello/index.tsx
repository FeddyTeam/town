import * as React from 'react'
import { Button, Figure, Form, Dialog } from '..'

const { ButtonGroup } = Button
const { FormItem, Input } = Form

import './hello.css'

const Hello = () => (
    <div>
        <div className="colors-bar">
            <div className="colors-bar__primary"></div>
            <div className="colors-bar__secondary"></div>
            <div className="colors-bar__gray"></div>
            <div className="colors-bar__focus"></div>
            <div className="colors-bar__alert"></div>
        </div>

        <Dialog title="xxx yyy zzz" open={false}>
            <p>Hello World!</p>
        </Dialog>

        <Form>
            <FormItem label="USERNAME">
                <Input />
            </FormItem>
            <FormItem label="EMAIL" helperText="Your email address">
                <Input placeholder="Email"/>
            </FormItem>
            <FormItem label="ERROR" helperText="Please check your input" error>
                <Input placeholder="Biu Biu Biu"/>
            </FormItem>
            <FormItem label="some theme" helperText="Biu Biu Biu" theme="wow">
                <Input />
            </FormItem>
            <FormItem label="Number">
                <Input type="textarea" />
            </FormItem>
        </Form>

        <h1 className="title">
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="alert">Alert</Button>
            <ButtonGroup>
                <Button type="primary">Yes</Button>
                <Button type="secondary">No</Button>
            </ButtonGroup>
        </h1>
        <Figure
            src="https://fakeimg.pl/600x400/"
            alt="some text"
            caption="some text ..."
        />
        <Figure
            src="https://source.unsplash.com/random/480x320"
            alt="random images from unsplash"
            caption="random images from unsplash"
        />
        <Figure
            src="https://source.unsplash.com/random/480x320"
            alt="random images from unsplash"
            caption="random images from unsplash"
            link="https://www.google.com"
        />
        <Figure
            src="https://source.unsplash.com/random/480x320"
            alt="random images from unsplash"
            caption="random images from unsplash"
            link="https://www.google.com"
            source="Unsplash"
            sourceLink="https;//unsplash.com"
        />
    </div>
)

export default Hello
