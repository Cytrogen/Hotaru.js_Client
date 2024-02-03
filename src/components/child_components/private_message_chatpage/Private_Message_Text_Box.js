import { Icon } from "@iconify/react";

const PrivateMessageTextBox = () => {
    return (
        <form
            className="position-relative flex-shrink-0 p-0 m-0"
            style={{paddingLeft: '16px', paddingRight: '16px', marginTop: '-8px'}}
        >
            <div
                className="position-relative w-100 p-0 m-0"
                style={{
                    marginBottom: '24px',
                    backgroundColor: 'rgba(56, 58, 64)',
                    textIndent: '0',
                    borderRadius: '8px'
                }}
            >
                <div
                    className="overflow-x-hidden overflow-y-scroll"
                    style={{
                        maxHeight: '50vh',
                        borderRadius: '8px',
                        backfaceVisibility: 'hidden',
                        scrollbarWidth: 'none'
                    }}
                >
                    <div className="d-flex position-relative" style={{ paddingLeft: '16px' }}>
                                    <span className="position-sticky" style={{ flex: '0 0 auto', alignSelf: 'stretch' }}>
                                        <Icon
                                            icon="bi:plus-circle-fill"
                                            className="position-sticky w-auto m-0"
                                            style={{
                                                height: '44px', padding: '10px 16px', top: '0', marginLeft: '-16px',
                                                background: 'transparent', color: 'rgba(181, 186, 193)', border: '0'
                                            }}
                                        />
                                    </span>

                        <span
                            className="p-0 fs-6 w-100 position-relative"
                            style={{
                                background: 'transparent', resize: 'none', border: 'none', appearance: 'none',
                                fontWeight: '400', lineHeight: '1.375rem', height: '44px', minHeight: '44px',
                                boxSizing: 'border-box', color: 'rgba(219, 222, 225)',
                            }}
                        >
                            <>
                                <textarea
                                    autoCapitalize="none" autoComplete="off" autoCorrect="off" autoFocus="true"
                                    placeholder="Text @dummy" spellCheck="true"
                                    className="position-absolute overflow-hidden"
                                    style={{
                                        border: 'none', outline: 'none', resize: 'none',
                                        paddingBottom: '11px', paddingTop: '11px', paddingRight: '10px',
                                        left: '0', right: '10px', background: 'transparent',
                                        caretColor: 'rgba(219, 222, 225)', color: 'rgba(219, 222, 225)'
                                    }}
                                />
                            </>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PrivateMessageTextBox;
